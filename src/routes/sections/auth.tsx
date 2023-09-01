import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GuestGuard } from "src/auth/guard";
import { SplashScreen } from "src/components/loading-screen";
import AuthClassicLayout from "src/layouts/auth/AuthLayout";

// Auth
const ForgotPasswordPage = lazy(() => import("src/pages/auth/forgot-password"));
const LoginPage = lazy(() => import("src/pages/auth/login"));
const RegisterPage = lazy(() => import("src/pages/auth/register"));

const authRoutes = [
    {
        path: "auth",
        element: (
            <GuestGuard>
                <Suspense fallback={<SplashScreen />}>
                    <Outlet />
                </Suspense>
            </GuestGuard>
        ),
        children: [
            {
                path: "login",
                element: (
                    <AuthClassicLayout>
                        <LoginPage />
                    </AuthClassicLayout>
                )
            },
            {
                path: "register",
                element: (
                    <AuthClassicLayout>
                        <RegisterPage />
                    </AuthClassicLayout>
                )
            },
            {
                path: "forgot-password",
                element: (
                    <AuthClassicLayout>
                        <ForgotPasswordPage />
                    </AuthClassicLayout>
                )
            }
        ]
    }
];

export default authRoutes;
