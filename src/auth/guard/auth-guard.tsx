import { ReactNode, useCallback, useEffect, useState } from "react";
import useAuthenticate from "src/hooks/useAuthenticate";
import { useRouter } from "src/routes/hooks";
import paths from "src/routes/paths";

type Props = {
    children: ReactNode;
};

const AuthGuard = ({ children }: Props) => {
    const router = useRouter();

    const { isAuthenticated } = useAuthenticate();

    const [checked, setChecked] = useState(false);

    const check = useCallback(() => {
        if (!isAuthenticated) {
            const searchParams = new URLSearchParams({
                returnTo: window.location.pathname
            }).toString();

            const loginPath = paths.auth.jwt.login;

            const href = `${loginPath}?${searchParams}`;

            router.replace(href);
        } else {
            setChecked(true);
        }
    }, [isAuthenticated, router]);

    useEffect(() => {
        check();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!checked) {
        return null;
    }

    return children;
};

export default AuthGuard;
