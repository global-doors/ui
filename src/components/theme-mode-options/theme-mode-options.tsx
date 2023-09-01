import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import { alpha, useTheme } from "@mui/material/styles";
import { Iconify } from "src/components/iconify";
import { useSettingsContext } from "src/components/settings";

const ThemeModeOptions = () => {
    const settings = useSettingsContext();
    const value = settings.themeMode;
    const options = ["light", "dark"];
    const icons = ["solar:sun-2-line-duotone", "solar:cloudy-moon-line-duotone"];
    const onChange = (newValue: string) => settings.onUpdate("themeMode", newValue);
    const theme = useTheme();
    const iconColor = theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.primary.main;
    return (
        <Stack direction="row" spacing={2}>
            {options.map((option, index) => {
                const selected = value === option;

                return (
                    <ButtonBase
                        key={option}
                        onClick={() => onChange(option)}
                        sx={{
                            width: 1,
                            height: 40,
                            borderRadius: 1,
                            border: `solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
                            ...(selected && {
                                bgcolor: "background.paper",
                                boxShadow: `-24px 8px 24px -4px ${alpha(
                                    theme.palette.mode === "light"
                                        ? theme.palette.grey[500]
                                        : theme.palette.common.black,
                                    0.08
                                )}`
                            })
                        }}
                    >
                        <Iconify
                            color={selected ? iconColor : theme.palette.grey[500]}
                            icon={index === 0 ? icons[0] : icons[1]}
                        />
                    </ButtonBase>
                );
            })}
        </Stack>
    );
};

export default ThemeModeOptions;
