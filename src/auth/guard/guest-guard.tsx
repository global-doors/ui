import { ReactNode, useCallback, useEffect } from "react";
import useAuthenticate from "src/hooks/useAuthenticate";
import { useRouter, useSearchParams } from "src/routes/hooks";
import paths from "src/routes/paths";

type Props = {
    children: ReactNode;
};

export default function GuestGuard({ children }: Props) {
    const router = useRouter();

    const searchParams = useSearchParams();

    const returnTo = searchParams.get("returnTo") || paths.dashboard.root;

    const { isAuthenticated } = useAuthenticate();

    const check = useCallback(() => {
        if (isAuthenticated) {
            router.replace(returnTo);
        }
    }, [isAuthenticated, returnTo, router]);

    useEffect(() => {
        check();
    }, [check]);

    return children;
}
