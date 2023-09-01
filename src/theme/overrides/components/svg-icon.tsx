import { Theme } from "@mui/material/styles";

const svgIcon = (theme: Theme) => ({
    MuiSvgIcon: {
        styleOverrides: {
            fontSizeLarge: {
                width: 32,
                height: 32,
                fontSize: "inherit"
            }
        }
    }
});

export default svgIcon;
