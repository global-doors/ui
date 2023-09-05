import { useNavigate } from "react-router-dom";
import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import useAccessToken from "src/hooks/useAccessToken";
import paths from "src/routes/paths";

const useQueryOptions = <T>(options?: UseQueryOptions<T, AxiosError>): UseQueryOptions<T, AxiosError> => {
    const { revoke } = useAccessToken();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    return {
        staleTime: 15000,
        ...options,
        retry: false,
        refetchOnWindowFocus: false,
        onError: (error: AxiosError<any>) => {
            options?.onError?.(error);
            const httpStatus = error.response?.status ?? 0;
            if (httpStatus === 401) {
                revoke();
                navigate(paths.auth.jwt.login);
                enqueueSnackbar(
                    "Unauthorised Action.",
                    { variant: "error" });
            } else if (httpStatus >= 400 && httpStatus < 500) {
                enqueueSnackbar(
                    error.response?.data.message ?? error.response?.data,
                    { variant: "warning" });
            } else {
                enqueueSnackbar(
                    `A server error occurred: ${error.response?.data.message ?? error.message}`,
                    { variant: "error" });
            }
        }
    };
};

export default useQueryOptions;
