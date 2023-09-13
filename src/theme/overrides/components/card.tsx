import { Theme } from "@mui/material/styles";

const card = (theme: Theme) => ({
    MuiCard: {
        styleOverrides: {
            root: {
                position: "relative",
                boxShadow: theme.customShadows.card,
                borderRadius: theme.shape.borderRadius * 2,
                zIndex: 0 // Fix Safari overflow: hidden with border radius
            }
        }
    },
    MuiCardHeader: {
        styleOverrides: {
            root: {
                padding: theme.spacing(3, 3, 0)
            }
        }
    },
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: theme.spacing(3)
            }
        }
    },
    MuiCardActions: {
        styleOverrides: {
            root: {
                display: "flex",
                justifyContent: "flex-end",
                paddingLeft: theme.spacing(3),
                paddingRight: theme.spacing(3),
                paddingBottom: theme.spacing(1.5)
            }
        }
    }
});

export default card;
