import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { CompactLayout } from "src/layouts/compact";

const Page404 = lazy(() => import("src/pages/404"));

const mainRoutes = [
    {
        element: (
            <CompactLayout>
                <Outlet />
            </CompactLayout>
        ),
        children: [{ path: "404", element: <Page404 /> }]
    }
];

export default mainRoutes;
