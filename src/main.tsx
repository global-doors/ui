import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// Workaround for GitHub pages
const RouterComponent = import.meta.env.PROD ? HashRouter : BrowserRouter;

root.render(
    <HelmetProvider>
        <RouterComponent>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Suspense>
                    <App />
                </Suspense>
            </LocalizationProvider>
        </RouterComponent>
    </HelmetProvider>
);
