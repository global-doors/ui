import { Theme } from "@mui/material/styles";

import { menuItem } from "../../css";

const menu = (theme: Theme) => ({
    MuiMenuItem: {
        styleOverrides: {
            root: {
                ...menuItem(theme)
            }
        }
    }
});

export default menu;
