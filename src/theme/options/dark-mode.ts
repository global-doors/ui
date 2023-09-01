import customShadows from "../custom-shadows";
import palette from "../palette";
import shadows from "../shadows";

const darkMode = (mode: "light" | "dark") => ({
    palette: palette(mode),
    shadows: shadows(mode),
    customShadows: customShadows(mode)
});

export default darkMode;
