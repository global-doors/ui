import { useForm } from "react-hook-form";
import { ResetPasswordForm } from "src/types/forms";
import { FormProvider, RHFTextField } from "src/components/hook-form";
import Stack from "@mui/material/Stack";
import { CardActions, CardContent } from "@mui/material";
import Button from "@mui/material/Button";

const PasswordTab = () => {
    const defaultValues = {
        oldPassword: "",
        newPassword: ""
    };

    const methods = useForm<ResetPasswordForm>({
        defaultValues,
        mode: "onChange"
    });

    return (
        <FormProvider methods={methods}>
            <CardContent>
                <Stack spacing={2}>
                    <RHFTextField label="Old Password" name="oldPassword" />
                    <RHFTextField label="New Password" name="newPassword" />
                </Stack>
            </CardContent>
            <CardActions>
                <Button variant="contained">
                    Save
                </Button>
            </CardActions>
        </FormProvider>
    );
};

export default PasswordTab;