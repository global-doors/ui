import { AuthConsumer, AuthProvider } from "src/auth/context";
import { MotionLazy } from "src/components/animate/motion-lazy";
import { ProgressBar } from "src/components/progress-bar";
import { SettingsProvider } from "src/components/settings";
import useScrollToTop from "src/hooks/use-scroll-to-top";
import Router from "src/routes/sections";
import ThemeProvider from "src/theme";

import "simplebar-react/dist/simplebar.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
    useScrollToTop();

    return (
        <AuthProvider>
            <SettingsProvider
                defaultSettings={{
                    themeMode: "light", // 'light' | 'dark'
                    themeLayout: "mini" // 'vertical' | 'mini'
                }}
            >
                <ThemeProvider>
                    <MotionLazy>
                        <ProgressBar />
                        <AuthConsumer>
                            <Router />
                        </AuthConsumer>
                    </MotionLazy>
                </ThemeProvider>
            </SettingsProvider>
        </AuthProvider>
    );
};

export default App;
