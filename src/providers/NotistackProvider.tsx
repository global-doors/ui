import { ReactNode, useRef } from "react";
import { IconButton } from "@mui/material";
import { SnackbarKey, SnackbarProvider } from "notistack";
import { Iconify } from "src/components/iconify";

type NotistackProviderProps = {
    children: ReactNode;
};
const NotistackProvider = ({ children }: NotistackProviderProps) => {
    const notistackRef = useRef<any>(null);

    const onClose = (key: SnackbarKey) => () => {
        notistackRef.current.closeSnackbar(key);
    };

    return (
        <SnackbarProvider
            ref={notistackRef}
            // eslint-disable-next-line react/no-unstable-nested-components
            action={key => (
                <IconButton onClick={onClose(key)} size="small" sx={{ p: 0.5 }}>
                    <Iconify icon="solar:close-circle-bold" />
                </IconButton>
            )}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            maxSnack={1}
            preventDuplicate
            variant="success"
        >
            {children}
        </SnackbarProvider>
    );
};

export default NotistackProvider;
