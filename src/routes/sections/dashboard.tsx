import { lazy, Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthGuard } from "src/auth/guard";
import { LoadingScreen } from "src/components/loading-screen";
import { DashboardLayout } from "src/layouts/dashboard";
import SingleOrder from "src/pages/dashboard/single-order";

const SettingsPage = lazy(() => import("src/pages/dashboard/settings"));
const SalesOrders = lazy(() => import("src/pages/dashboard/sales-orders"));
const AddOrder = lazy(() => import("src/pages/dashboard/add-order"));

const dashboardRoutes = [
    {
        path: "dashboard",
        element: (
            <AuthGuard>
                <DashboardLayout>
                    <Suspense fallback={<LoadingScreen />}>
                        <Outlet />
                    </Suspense>
                </DashboardLayout>
            </AuthGuard>
        ),
        children: [
            { element: <Navigate to="sales" />, index: true },
            { path: "settings", element: <SettingsPage /> },
            {
                path: "sales",
                children: [
                    { element: <SalesOrders />, index: true },
                    { path: "add-order", element: <AddOrder /> },
                    { path: "order/:id", element: <SingleOrder /> }
                ]
            }
        ]
    }
];

export default dashboardRoutes;
