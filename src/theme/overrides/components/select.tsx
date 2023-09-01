import { Theme } from "@mui/material/styles";

const select = (theme: Theme) => ({
    MuiSelect: {
        styleOverrides: {
            icon: {
                right: 10,
                width: 18,
                height: 18,
                top: "calc(50% - 9px)"
            }
        }
    },
    MuiNativeSelect: {
        styleOverrides: {
            icon: {
                right: 10,
                width: 18,
                height: 18,
                top: "calc(50% - 9px)"
            }
        }
    }
});

export default select;
