import { ReactNode, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "src/routes/hooks";
import paths from "src/routes/paths";

import { useAuthContext } from "../hooks";

type Props = {
    children: ReactNode;
};

export default function GuestGuard({ children }: Props) {
    const router = useRouter();

    const searchParams = useSearchParams();

    const returnTo = searchParams.get("returnTo") || paths.dashboard.root;

    const { authenticated } = useAuthContext();

    const check = useCallback(() => {
        if (authenticated) {
            router.replace(returnTo);
        }
    }, [authenticated, returnTo, router]);

    useEffect(() => {
        check();
    }, [check]);

    return children;
}
