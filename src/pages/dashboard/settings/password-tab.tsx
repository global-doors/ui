import { useForm } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import { CardActions, CardContent } from "@mui/material";
import Stack from "@mui/material/Stack";
import { FormProvider, RHFTextField } from "src/components/hook-form";
import useResetPassword from "src/hooks/mutation/useResetPassword";
import { ResetPasswordForm } from "src/types/forms";

const PasswordTab = () => {
    const defaultValues = {
        oldPassword: "",
        newPassword: ""
    };

    const methods = useForm<ResetPasswordForm>({
        defaultValues,
        mode: "onChange"
    });

    const { mutate, isLoading } = useResetPassword();
    const onSubmit = (form: ResetPasswordForm) => {
        mutate(form);
    };

    return (
        <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            <CardContent>
                <Stack spacing={2}>
                    <RHFTextField label="Old Password" name="oldPassword" />
                    <RHFTextField label="New Password" name="newPassword" />
                </Stack>
            </CardContent>
            <CardActions>
                <LoadingButton loading={isLoading} type="submit" variant="contained">
                    Save
                </LoadingButton>
            </CardActions>
        </FormProvider>
    );
};

export default PasswordTab;
