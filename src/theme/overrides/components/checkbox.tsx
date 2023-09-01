import { Theme } from "@mui/material/styles";

const checkbox = (theme: Theme) => ({
    MuiCheckbox: {
        styleOverrides: {
            root: {
                padding: theme.spacing(1)
            }
        }
    }
});

export default checkbox;
