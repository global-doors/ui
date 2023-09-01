import { Theme } from "@mui/material/styles";

const radio = (theme: Theme) => ({
    // CHECKBOX, RADIO, SWITCH
    MuiFormControlLabel: {
        styleOverrides: {
            label: {
                ...theme.typography.body2
            }
        }
    },

    MuiRadio: {
        styleOverrides: {
            root: {
                padding: theme.spacing(1)
            }
        }
    }
});

export default radio;
