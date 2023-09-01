import { Theme } from "@mui/material/styles";

const skeleton = (theme: Theme) => ({
    MuiSkeleton: {
        styleOverrides: {
            root: {
                backgroundColor: theme.palette.background.neutral
            },
            rounded: {
                borderRadius: theme.shape.borderRadius * 2
            }
        }
    }
});

export default skeleton;
