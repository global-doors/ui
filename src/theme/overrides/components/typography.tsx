import { Theme } from "@mui/material/styles";

const typography = (theme: Theme) => ({
    MuiTypography: {
        styleOverrides: {
            paragraph: {
                marginBottom: theme.spacing(2)
            },
            gutterBottom: {
                marginBottom: theme.spacing(1)
            }
        }
    }
});

export default typography;
