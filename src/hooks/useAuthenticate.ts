import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import jwtDecode from "jwt-decode";
import useMutationOptions from "src/hooks/mutation/useMutationOptions";
import paths from "src/routes/paths";
import { authenticate, LoginResponse } from "src/services/api";
import { LoginForm } from "src/types/forms";

import useAccessToken, { AccessTokenPayload } from "./useAccessToken";

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
                // setToken(data["x-access-token"]); // TODO
                // eslint-disable-next-line max-len
                setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ODY0YzcxNy01ODdkLTQ3MmEtOTI5YS04ZTVmMjk4MDI0ZGEtMCIsImlhdCI6MTY5MzU3MzY3NCwibmFtZSI6IlRlc3QgVXNlciIsImV4cCI6MTY5MzgzMjg3NH0.fARvRFe5dpLbjDd1ub3xiRjJPhGr7tP6W0KIcdg84Ec");
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

            // eslint-disable-next-line max-len
            // const payload = jwtDecode<AccessTokenPayload>(token);
            // const expiry = payload.exp * 1000;
            // return expiry > Date.now(); // TODO
            return true;
        },
        [token]
    );

    return { isAuthenticated, login, logout, user };
};

export default useAuthenticate;
