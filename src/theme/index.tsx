import { ReactNode, useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import merge from "lodash/merge";
import { useSettingsContext } from "src/components/settings";
import ComponentsOverrides from "src/theme/overrides";

import darkMode from "./options/dark-mode";
import customShadows from "./custom-shadows";
import palette from "./palette";
import shadows from "./shadows";
import { typography } from "./typography";

type Props = {
    children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
    const settings = useSettingsContext();

    const darkModeOption = darkMode(settings.themeMode);

    const baseOption = useMemo(
        () => ({
            palette: palette("light"),
            shadows: shadows("light"),
            customShadows: customShadows("light"),
            typography,
            shape: { borderRadius: 8 }
        }),
        []
    );

    const memoizedValue = useMemo(
        () => merge(
            // Base
            baseOption,
            // Dark mode: remove if not in use
            darkModeOption
        ),
        [baseOption, darkModeOption]
    );

    const theme = createTheme(memoizedValue as ThemeOptions);

    theme.components = ComponentsOverrides(theme);

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
