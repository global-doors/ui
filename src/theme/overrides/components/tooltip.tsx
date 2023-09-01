import { Theme } from "@mui/material/styles";

const tooltip = (theme: Theme) => {
    const lightMode = theme.palette.mode === "light";

    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[lightMode ? 800 : 700]
                },
                arrow: {
                    color: theme.palette.grey[lightMode ? 800 : 700]
                }
            }
        }
    };
};

export default tooltip;
