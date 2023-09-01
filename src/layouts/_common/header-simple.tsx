import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Logo } from "src/components/logo";
import useOffSetTop from "src/hooks/use-off-set-top";

import { HEADER } from "../config-layout";

import HeaderShadow from "./header-shadow";

import { bgBlur } from "src/theme/css";

const HeaderSimple = () => {
    const theme = useTheme();

    const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

    return (
        <AppBar>
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    height: {
                        xs: HEADER.H_MOBILE,
                        md: HEADER.H_DESKTOP
                    },
                    transition: theme.transitions.create(["height"], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter
                    }),
                    ...(offsetTop && {
                        ...bgBlur({
                            color: theme.palette.background.default
                        }),
                        height: {
                            md: HEADER.H_DESKTOP_OFFSET
                        }
                    })
                }}
            >
                <Logo />

                <Stack alignItems="center" direction="row" spacing={1}>
                    {/* <Link href="/" component={RouterLink} color="inherit" sx={{ typography: "subtitle2" }}> */}
                    {/*  Need help? */}
                    {/* </Link> */}
                </Stack>
            </Toolbar>

            {offsetTop && <HeaderShadow />}
        </AppBar>
    );
};

export default HeaderSimple;
