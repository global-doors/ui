import { Theme } from "@mui/material/styles";

const stepper = (theme: Theme) => ({
    MuiStepConnector: {
        styleOverrides: {
            line: {
                borderColor: theme.palette.divider
            }
        }
    }
});

export default stepper;
