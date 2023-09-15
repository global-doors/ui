import { useNavigate } from "react-router-dom";
import { UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import useAccessToken from "src/hooks/useAccessToken";
import paths from "src/routes/paths";

const useMutationOptions = <T, V, C>(
    options?: UseMutationOptions<T, AxiosError, V, C>
): UseMutationOptions<T, AxiosError, V, C> => {
    const { revoke } = useAccessToken();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    return {
        ...options,
        retry: false,
        onError: (error: AxiosError<any>, variables: V, context?: C) => {
            options?.onError?.(error, variables, context);
            const httpStatus = error.response?.status ?? 0;
            if (httpStatus === 401) {
                revoke();
                navigate(paths.auth.jwt.login);
                enqueueSnackbar(
                    "Unauthorised Action.",
                    { variant: "error" });
            } else if (httpStatus >= 400 && httpStatus < 500) {
                enqueueSnackbar(
                    error.response?.data.message ?? error.message,
                    { variant: "warning" }
                );
            } else {
                enqueueSnackbar(
                    `A server error occurred: ${error.response?.data.message ?? error.message}`,
                    { variant: "error" }
                );
            }
        }
    };
};

export default useMutationOptions;
