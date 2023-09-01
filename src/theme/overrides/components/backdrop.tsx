import { alpha, Theme } from "@mui/material/styles";

const backdrop = (theme: Theme) => ({
    MuiBackdrop: {
        styleOverrides: {
            root: {
                backgroundColor: alpha(theme.palette.grey[900], 0.8)
            },
            invisible: {
                background: "transparent"
            }
        }
    }
});

export default backdrop;
