import { ReactNode, useCallback, useEffect, useState } from "react";
import { useRouter } from "src/routes/hooks";
import paths from "src/routes/paths";

import { useAuthContext } from "../hooks";

const loginPaths: Record<string, string> = {
    jwt: paths.auth.jwt.login
};

type Props = {
    children: ReactNode;
};

const AuthGuard = ({ children }: Props) => {
    const router = useRouter();

    const { authenticated, method } = useAuthContext();

    const [checked, setChecked] = useState(false);

    const check = useCallback(() => {
        if (!authenticated) {
            const searchParams = new URLSearchParams({
                returnTo: window.location.pathname
            }).toString();

            const loginPath = loginPaths[method];

            const href = `${loginPath}?${searchParams}`;

            router.replace(href);
        } else {
            setChecked(true);
        }
    }, [authenticated, method, router]);

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
