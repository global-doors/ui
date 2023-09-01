import { Theme } from "@mui/material/styles";

const timeline = (theme: Theme) => ({
    MuiTimelineDot: {
        styleOverrides: {
            root: {
                boxShadow: "none"
            }
        }
    },
    MuiTimelineConnector: {
        styleOverrides: {
            root: {
                backgroundColor: theme.palette.divider
            }
        }
    }
});

export default timeline;
