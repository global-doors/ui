import { Theme } from "@mui/material/styles";

const list = (theme: Theme) => ({
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                color: "inherit",
                minWidth: "auto",
                marginRight: theme.spacing(2)
            }
        }
    },
    MuiListItemAvatar: {
        styleOverrides: {
            root: {
                minWidth: "auto",
                marginRight: theme.spacing(2)
            }
        }
    },
    MuiListItemText: {
        styleOverrides: {
            root: {
                margin: 0
            },
            multiline: {
                margin: 0
            }
        }
    }
});

export default list;
