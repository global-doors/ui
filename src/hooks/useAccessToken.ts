import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import paths from "src/routes/paths";
import { setSession } from "src/utils/jwt";

const useAccessToken = (): {
    token: string | null,
    setToken: (token: string) => void,
    revoke: VoidFunction
} => {
    const value = useMemo(() => localStorage.getItem("accessToken"), []);
    const navigate = useNavigate();
    const revoke = () => {
        setSession(null);
        navigate(paths.auth.jwt.login);
    };
    return {
        token: value,
        setToken: setSession,
        revoke
    };
};

export default useAccessToken;
