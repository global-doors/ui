import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import useMutationOptions from "src/hooks/mutation/useMutationOptions";
import { resetPassword, ResetPasswordResponse } from "src/services/api";

type ResetPasswordForm = {
    oldPassword: string;
    newPassword: string;
};
const useResetPassword = (userId: string): UseMutationResult<ResetPasswordResponse, AxiosError, ResetPasswordForm> => {
    const { enqueueSnackbar } = useSnackbar();
    return useMutation(
        (form: ResetPasswordForm) => resetPassword(userId, form.oldPassword, form.newPassword),
        useMutationOptions({
            onSuccess: async () => {
                enqueueSnackbar("Password reset successfully.");
            }
        })
    );
};

export default useResetPassword;
