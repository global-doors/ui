import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { Iconify } from "src/components/iconify";
import { useSettingsContext } from "src/components/settings";
import { useResponsive } from "src/hooks/use-responsive";

import { NAV } from "../config-layout";

import { bgBlur } from "src/theme/css";

const NavToggleButton = ({ sx, ...other }: IconButtonProps) => {
    const theme = useTheme();

    const settings = useSettingsContext();

    const lgUp = useResponsive("up", "lg");

    if (!lgUp) {
        return null;
    }

    return (
        <IconButton
            onClick={() => settings.onUpdate("themeLayout", settings.themeLayout === "vertical" ? "mini" : "vertical")}
            size="small"
            sx={{
                p: 0.5,
                top: 32,
                position: "fixed",
                left: NAV.W_VERTICAL - 12,
                zIndex: theme.zIndex.appBar + 1,
                border: `dashed 1px ${theme.palette.divider}`,
                ...bgBlur({ opacity: 0.48, color: theme.palette.background.default }),
                "&:hover": {
                    bgcolor: "background.default"
                },
                ...sx
            }}
            {...other}
        >
            <Iconify
                icon={
                    settings.themeLayout === "vertical"
                        ? "eva:arrow-ios-back-fill"
                        : "eva:arrow-ios-forward-fill"
                }
                width={16}
            />
        </IconButton>
    );
};

export default NavToggleButton;
