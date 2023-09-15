import { useEffect, useState } from "react";
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
import useAuthenticate from "src/hooks/useAuthenticate";
import { RouterLink } from "src/routes/components";
import { useRouter, useSearchParams } from "src/routes/hooks";
import paths from "src/routes/paths";
import { LoginForm } from "src/types/forms";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const router = useRouter();

    const [errorMsg] = useState("");

    const searchParams = useSearchParams();

    const returnTo = searchParams.get("returnTo");

    const password = useBoolean();

    const LoginSchema = Yup.object()
        .shape({
            username: Yup.string()
                .required("Username is required"),
            password: Yup.string()
                .required("Password is required")
        });

    const defaultValues = {
        username: "",
        password: ""
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues
    });

    const {
        reset,
        handleSubmit
    } = methods;

    const { login } = useAuthenticate();
    const { mutate, isSuccess, isError, error, isLoading } = login;
    const onSubmit = async (data: LoginForm) => mutate(data);

    const navigate = useNavigate();

    // On Log In Response
    useEffect(
        () => {
            if (isSuccess) navigate(returnTo || PATH_AFTER_LOGIN);
            if (isError) {
                reset();
                // setErrorMsg(typeof error === "string" ? error : error.message);
            }
        },
        [error, isError, isSuccess, reset, returnTo, router]
    );

    const renderHead = (
        <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography variant="h4">Sign in</Typography>
        </Stack>
    );

    const renderForm = (
        <Stack spacing={2.5} sx={{ minWidth: 320 }}>
            {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

            <RHFTextField fullWidth label="Username" name="username" />

            <RHFTextField
                fullWidth
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
                loading={isLoading}
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
                <title> Login</title>
            </Helmet>

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {renderHead}

                {renderForm}
            </FormProvider>
        </>
    );
};

export default LoginPage;
