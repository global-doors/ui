import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <HelmetProvider>
        <BrowserRouter>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Suspense>
                    <App />
                </Suspense>
            </LocalizationProvider>
        </BrowserRouter>
    </HelmetProvider>
);
