import { MotionLazy } from "src/components/animate/motion-lazy";
import { ProgressBar } from "src/components/progress-bar";
import { SettingsProvider } from "src/components/settings";
import useScrollToTop from "src/hooks/use-scroll-to-top";
import AuthProvider from "src/providers/AuthProvider";
import NotistackProvider from "src/providers/NotistackProvider";
import QueryProvider from "src/providers/QueryProvider";
import Router from "src/routes/sections";
import ThemeProvider from "src/theme";

import "simplebar-react/dist/simplebar.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
    useScrollToTop();

    return (
        <SettingsProvider
            defaultSettings={{
                themeMode: "light", // 'light' | 'dark'
                themeLayout: "mini" // 'vertical' | 'mini'
            }}
        >
            <NotistackProvider>
                <QueryProvider>
                    <ThemeProvider>
                        <MotionLazy>
                            <ProgressBar />
                            <AuthProvider>
                                <Router />
                            </AuthProvider>
                        </MotionLazy>
                    </ThemeProvider>
                </QueryProvider>
            </NotistackProvider>
        </SettingsProvider>
    );
};

export default App;
