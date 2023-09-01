import { ReactNode } from "react";
import AuthContext from "src/auth/context/auth-context";
import { SplashScreen } from "src/components/loading-screen";

type Props = {
    children: ReactNode;
};

const AuthConsumer = ({ children }: Props) => (
    <AuthContext.Consumer>
        {auth => (auth.loading ? <SplashScreen /> : children)}
    </AuthContext.Consumer>
);

export default AuthConsumer;
