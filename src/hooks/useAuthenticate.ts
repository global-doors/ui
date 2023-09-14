import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import jwtDecode from "jwt-decode";
import useMutationOptions from "src/hooks/mutation/useMutationOptions";
import paths from "src/routes/paths";
import { authenticate, LoginResponse } from "src/services/api";
import { AccessTokenPayload } from "src/types/api";
import { LoginForm } from "src/types/forms";

import useAccessToken from "./useAccessToken";

const useAuthenticate = (): {
    login: UseMutationResult<LoginResponse, AxiosError, LoginForm>
    logout: VoidFunction;
    isAuthenticated: boolean;
    user?: AccessTokenPayload;
} => {
    const { token, setToken, revoke } = useAccessToken();
    const navigate = useNavigate();

    const login = useMutation(
        (form: LoginForm) => authenticate(form.username, form.password),
        useMutationOptions({
            onSuccess: async data => {
                setToken(data["x-access-token"]);
            }
        })
    );

    const logout = () => {
        revoke();
        navigate(paths.auth.jwt.login);
    };

    const user = useMemo(
        () => (
            token
                ? jwtDecode<AccessTokenPayload>(token)
                : undefined
        ),
        [token]
    );

    const isAuthenticated: boolean = useMemo(
        () => {
            if (!token) return false;

            const payload = jwtDecode<AccessTokenPayload>(token);
            const expiry = payload.exp * 1000;
            return expiry > Date.now();
        },
        [token]
    );

    return { isAuthenticated, login, logout, user };
};

export default useAuthenticate;
