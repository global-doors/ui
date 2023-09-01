import { loadingButtonClasses, LoadingButtonProps } from "@mui/lab/LoadingButton";
import { Theme } from "@mui/material/styles";

const loadingButton = (theme: Theme) => ({
    MuiLoadingButton: {
        styleOverrides: {
            root: ({ ownerState }: { ownerState: LoadingButtonProps }) => ({
                ...(ownerState.variant === "soft" && {
                    [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                        left: 10
                    },
                    [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                        right: 14
                    },
                    ...(ownerState.size === "small" && {
                        [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                            left: 10
                        },
                        [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                            right: 10
                        }
                    })
                })
            })
        }
    }
});

export default loadingButton;
