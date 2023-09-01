import { Theme } from "@mui/material/styles";

const appBar = (theme: Theme) => ({
    MuiAppBar: {
        styleOverrides: {
            root: {
                boxShadow: "none"
            }
        }
    }
});

export default appBar;
