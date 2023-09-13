import jwtDecode from "jwt-decode";
import { AccessTokenPayload } from "src/hooks/useAccessToken";
import paths from "src/routes/paths";
import axios from "src/utils/axios";

export const isValidToken = (accessToken: string) => {
    if (!accessToken) {
        return false;
    }

    const decoded = jwtDecode<AccessTokenPayload>(accessToken);

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
};

export const tokenExpired = (exp: number) => {
    // eslint-disable-next-line prefer-const
    let expiredTimer;

    const currentTime = Date.now();

    // Test token expires after 10s
    // const timeLeft = currentTime + 10000 - currentTime; // ~10s
    const timeLeft = exp * 1000 - currentTime;

    clearTimeout(expiredTimer);

    expiredTimer = setTimeout(() => {
        alert("Token expired");

        sessionStorage.removeItem("accessToken");

        window.location.href = paths.auth.jwt.login;
    }, timeLeft);
};

export const setSession = (accessToken: string | null) => {
    if (accessToken) {
        sessionStorage.setItem("accessToken", accessToken);

        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // This function below will handle when token is expired -- TODO
        // const { exp } = jwtDecode(accessToken); // ~3 days
        // tokenExpired(exp);
    } else {
        sessionStorage.removeItem("accessToken");

        delete axios.defaults.headers.common.Authorization;
    }
};
