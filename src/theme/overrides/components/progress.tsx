import { linearProgressClasses, LinearProgressProps } from "@mui/material/LinearProgress";
import { alpha, Theme } from "@mui/material/styles";

const COLORS = ["primary", "secondary", "info", "success", "warning", "error"] as const;

const progress = (theme: Theme) => {
    const rootStyles = (ownerState: LinearProgressProps) => {
        const bufferVariant = ownerState.variant === "buffer";

        const defaultStyle = {
            borderRadius: 4,
            [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 4
            },
            ...(bufferVariant && {
                backgroundColor: "transparent"
            })
        };

        const colorStyle = COLORS.map(color => ({
            ...(ownerState.color === color && {
                backgroundColor: alpha(theme.palette[color].main, 0.24)
            })
        }));

        return [defaultStyle, ...colorStyle];
    };

    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: ({ ownerState }: { ownerState: LinearProgressProps }) => rootStyles(ownerState)
            }
        }
    };
};

export default progress;
