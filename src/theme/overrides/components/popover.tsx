import { listClasses } from "@mui/material/List";
import { Theme } from "@mui/material/styles";

import { paper } from "../../css";

const popover = (theme: Theme) => ({
    MuiPopover: {
        styleOverrides: {
            paper: {
                ...paper({ theme, dropdown: true }),
                [`& .${listClasses.root}`]: {
                    paddingTop: 0,
                    paddingBottom: 0
                }
            }
        }
    }
});

export default popover;
