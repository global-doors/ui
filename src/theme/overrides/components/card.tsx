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
    }
});

export default card;
