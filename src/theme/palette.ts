import { alpha } from "@mui/material/styles";

export type ColorSchema = "primary" | "secondary" | "info" | "success" | "warning" | "error";

declare module "@mui/material/styles/createPalette" {
    interface TypeBackground {
        neutral: string;
    }

    interface SimplePaletteColorOptions {
        lighter: string;
        darker: string;
    }

    interface PaletteColor {
        lighter: string;
        darker: string;
    }
}

// SETUP COLORS

const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#f4f6f8",
    300: "#e0e3e7",
    400: "#c6cdd3",
    500: "#999ea3",
    600: "#6c7278",
    700: "#4b4f54",
    800: "#272b30",
    900: "#1a1c20"
};

const PRIMARY = {
    lighter: "#D1E9FC",
    light: "#76B0F1",
    main: "#2065D1",
    dark: "#103996",
    darker: "#061B64",
    contrastText: "#FFFFFF"
};

const SECONDARY = {
    lighter: "#C8FAD6",
    light: "#5BE49B",
    main: "#00A76F",
    dark: "#007867",
    darker: "#004B50",
    contrastText: "#FFFFFF"
};

const INFO = {
    lighter: "#CAFDF5",
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
    darker: "#003768",
    contrastText: "#FFFFFF"
};

const SUCCESS = {
    lighter: "#D3FCD2",
    light: "#77ED8B",
    main: "#22C55E",
    dark: "#118D57",
    darker: "#065E49",
    contrastText: "#ffffff"
};

const WARNING = {
    lighter: "#FFF5CC",
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
    darker: "#7A4100",
    contrastText: GREY[800]
};

const ERROR = {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#FFFFFF"
};

const COMMON = {
    common: {
        black: "#000000",
        white: "#FFFFFF"
    },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    divider: alpha(GREY[500], 0.2),
    action: {
        hover: alpha(GREY[500], 0.08),
        selected: alpha(GREY[500], 0.16),
        disabled: alpha(GREY[500], 0.8),
        disabledBackground: alpha(GREY[500], 0.24),
        focus: alpha(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};

const palette = (mode: "light" | "dark") => {
    const light = {
        ...COMMON,
        mode: "light",
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500]
        },
        background: {
            paper: "#FFFFFF",
            default: "#FFFFFF",
            neutral: GREY[200]
        },
        action: {
            ...COMMON.action,
            active: GREY[600]
        }
    };

    const dark = {
        ...COMMON,
        mode: "dark",
        text: {
            primary: "#FFFFFF",
            secondary: GREY[500],
            disabled: GREY[600]
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: alpha(GREY[500], 0.12)
        },
        action: {
            ...COMMON.action,
            active: GREY[500]
        }
    };

    return mode === "light" ? light : dark;
};

export default palette;
