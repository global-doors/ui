import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PasswordIcon } from "src/assets/icons";
import { FormProvider, RHFTextField } from "src/components/hook-form";
import { Iconify } from "src/components/iconify";
import { RouterLink } from "src/routes/components";
import paths from "src/routes/paths";
import * as Yup from "yup";

const ForgotPassword = () => {
    const ForgotPasswordSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be a valid email address")
    });

    const defaultValues = {
        email: ""
    };

    const methods = useForm({
        resolver: yupResolver(ForgotPasswordSchema),
        defaultValues
    });

    const {
        handleSubmit,
        formState: { isSubmitting }
    } = methods;

    const onSubmit = handleSubmit(async data => {
        try {
            await new Promise(resolve => {
                setTimeout(resolve, 500);
            });
            // eslint-disable-next-line no-console
            console.info("DATA", data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    });

    const renderForm = (
        <Stack alignItems="center" spacing={3}>
            <RHFTextField label="Email address" name="email"/>

            <LoadingButton
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill"/>}
                fullWidth
                loading={isSubmitting}
                size="large"
                sx={{ justifyContent: "space-between", pl: 2, pr: 1.5 }}
                type="submit"
                variant="contained"
            >
                Send Request
            </LoadingButton>

            <Link
                color="inherit"
                component={RouterLink}
                href={paths.auth.jwt.login}
                sx={{
                    alignItems: "center",
                    display: "inline-flex"
                }}
                variant="subtitle2"
            >
                <Iconify icon="eva:arrow-ios-back-fill" width={16}/>
                Return to sign in
            </Link>
        </Stack>
    );

    const renderHead = (
        <>
            <PasswordIcon sx={{ height: 96 }}/>

            <Stack spacing={1} sx={{ my: 5 }}>
                <Typography variant="h3">Forgot your password?</Typography>

                <Typography sx={{ color: "text.secondary" }} variant="body2">
                    Please enter the email address associated with your account and We will email you a link
                    to reset your password.
                </Typography>
            </Stack>
        </>
    );

    return (
        <>
            <Helmet>
                <title> Forgot Password</title>
            </Helmet>

            <FormProvider methods={methods} onSubmit={onSubmit}>
                {renderHead}

                {renderForm}
            </FormProvider>
        </>
    );
};

export default ForgotPassword;
