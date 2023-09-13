import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FormProvider, RHFTextField } from "src/components/hook-form";
import { Iconify } from "src/components/iconify";
import { PATH_AFTER_LOGIN } from "src/config-global";
import useBoolean from "src/hooks/use-boolean";
import { RouterLink } from "src/routes/components";
import { useRouter, useSearchParams } from "src/routes/hooks";
import paths from "src/routes/paths";
import * as Yup from "yup";

const RegisterPage = () => {
    // const { register } = useAuthenticate();

    const register = (email: string, password: string, firstName: string, lastName: string) => null;

    const router = useRouter();

    const [errorMsg, setErrorMsg] = useState("");

    const searchParams = useSearchParams();

    const returnTo = searchParams.get("returnTo");

    const password = useBoolean();

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required("First name required"),
        lastName: Yup.string().required("Last name required"),
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("Password is required")
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
        defaultValues
    });

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting }
    } = methods;

    const onSubmit = handleSubmit(async data => {
        try {
            await register?.(data.email, data.password, data.firstName, data.lastName);

            router.push(returnTo || PATH_AFTER_LOGIN);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            reset();
            setErrorMsg(typeof error === "string" ? error : error.message);
        }
    });

    const renderHead = (
        <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
            <Typography variant="h4">Get started absolutely free</Typography>

            <Stack direction="row" spacing={0.5}>
                <Typography variant="body2"> Already have an account? </Typography>

                <Link component={RouterLink} href={paths.auth.jwt.login} variant="subtitle2">
                    Sign in
                </Link>
            </Stack>
        </Stack>
    );

    const renderTerms = (
        <Typography
            component="div"
            sx={{
                color: "text.secondary",
                mt: 2.5,
                typography: "caption",
                textAlign: "center"
            }}
        >
            {"By signing up, I agree to "}
            <Link color="text.primary" href="/" underline="always">
                Terms of Service
            </Link>
            {" and "}
            <Link color="text.primary" href="/" underline="always">
                Privacy Policy
            </Link>
            .
        </Typography>
    );

    const renderForm = (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5}>
                {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <RHFTextField label="First name" name="firstName" />
                    <RHFTextField label="Last name" name="lastName" />
                </Stack>

                <RHFTextField label="Email address" name="email" />

                <RHFTextField
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={password.onToggle}>
                                    <Iconify icon={password.value ? "solar:eye-bold" : "solar:eye-closed-bold"} />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    label="Password"
                    name="password"
                    type={password.value ? "text" : "password"}
                />

                <LoadingButton
                    color="inherit"
                    fullWidth
                    loading={isSubmitting}
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    Create account
                </LoadingButton>
            </Stack>
        </FormProvider>
    );

    return (
        <>
            <Helmet>
                <title> Register</title>
            </Helmet>

            <>
                {renderHead}

                {renderForm}

                {renderTerms}
            </>
        </>
    );
};

export default RegisterPage;
