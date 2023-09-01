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
import { useAuthContext } from "src/auth/hooks";
import { FormProvider, RHFTextField } from "src/components/hook-form";
import { Iconify } from "src/components/iconify";
import { PATH_AFTER_LOGIN } from "src/config-global";
import useBoolean from "src/hooks/use-boolean";
import { RouterLink } from "src/routes/components";
import { useRouter, useSearchParams } from "src/routes/hooks";
import paths from "src/routes/paths";
import * as Yup from "yup";

const LoginPage = () => {
    const { login } = useAuthContext();

    const router = useRouter();

    const [errorMsg, setErrorMsg] = useState("");

    const searchParams = useSearchParams();

    const returnTo = searchParams.get("returnTo");

    const password = useBoolean();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("Password is required")
    });

    const defaultValues = {
        email: "demo@demo.com",
        password: "demo1234"
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues
    });

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting }
    } = methods;

    const onSubmit = handleSubmit(async data => {
        try {
            await login?.(data.email, data.password);

            router.push(returnTo || PATH_AFTER_LOGIN);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            reset();
            setErrorMsg(typeof error === "string" ? error : error.message);
        }
    });

    const renderHead = (
        <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography variant="h4">Sign in</Typography>
        </Stack>
    );

    const renderForm = (
        <Stack spacing={2.5} sx={{ minWidth: 320 }}>
            {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

            <RHFTextField fullWidth label="Email address" name="email"/>

            <RHFTextField
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end" onClick={password.onToggle}>
                                <Iconify icon={password.value ? "solar:eye-bold" : "solar:eye-closed-bold"}/>
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                label="Password"
                name="password"
                type={password.value ? "text" : "password"}
            />

            <Link
                color="inherit"
                component={RouterLink}
                href={paths.auth.jwt.forgotPassword}
                sx={{ alignSelf: "flex-end" }}
                underline="always"
                variant="body2"
            >
                Forgot password?
            </Link>

            <LoadingButton
                color="inherit"
                fullWidth
                loading={isSubmitting}
                size="large"
                type="submit"
                variant="contained"
            >
                Login
            </LoadingButton>
        </Stack>
    );

    return (
        <>
            <Helmet>
                <title> Jwt: Login</title>
            </Helmet>

            <FormProvider methods={methods} onSubmit={onSubmit}>
                {renderHead}

                {renderForm}
            </FormProvider>
        </>
    );
};

export default LoginPage;
