import { ReactNode, useEffect } from "react";
import useAccessToken from "src/hooks/useAccessToken";
import { setSession } from "src/utils/jwt";

type AuthProviderProps = {
    children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
    const {
        token,
        revoke
    } = useAccessToken();

    useEffect(
        () => {
            if (token) {
                setSession(token);
            } else {
                revoke();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return (children);
};

export default AuthProvider;
