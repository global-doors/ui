import { Navigate, useRoutes } from "react-router-dom";
import { PATH_AFTER_LOGIN } from "src/config-global";

import authRoutes from "./auth";
import dashboardRoutes from "./dashboard";
import mainRoutes from "./main";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Navigate replace to={PATH_AFTER_LOGIN} />
        },

        // Auth routes
        ...authRoutes,

        // Dashboard routes
        ...dashboardRoutes,

        // Main routes
        ...mainRoutes,

        // No match 404
        { path: "*", element: <Navigate replace to="/404" /> }
    ]);
}
