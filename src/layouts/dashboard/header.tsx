import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Iconify } from "src/components/iconify";
import { useSettingsContext } from "src/components/settings";
import useOffSetTop from "src/hooks/use-off-set-top";
import { useResponsive } from "src/hooks/use-responsive";

import { AccountPopover } from "../_common";
import { HEADER, NAV } from "../config-layout";

import { bgBlur } from "src/theme/css";

type Props = {
    onOpenNav?: VoidFunction;
};

const Header = ({ onOpenNav }: Props) => {
    const theme = useTheme();

    const settings = useSettingsContext();

    const isNavMini = settings.themeLayout === "mini";

    const lgUp = useResponsive("up", "lg");

    const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

    const renderContent = (
        <>
            {!lgUp && (
                <IconButton onClick={onOpenNav}>
                    <Iconify icon="solar:hamburger-menu-line-duotone" />
                </IconButton>
            )}

            <Stack
                alignItems="center"
                direction="row"
                flexGrow={1}
                justifyContent="flex-end"
                spacing={{ xs: 0.5, sm: 1 }}
            >
                <AccountPopover />
            </Stack>
        </>
    );

    return (
        <AppBar
            sx={{
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                ...bgBlur({
                    color: theme.palette.background.default
                }),
                transition: theme.transitions.create(["height"], {
                    duration: theme.transitions.duration.shorter
                }),
                ...(lgUp && {
                    width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
                    height: HEADER.H_DESKTOP,
                    ...(offsetTop && {
                        height: HEADER.H_DESKTOP_OFFSET
                    }),
                    ...(isNavMini && {
                        width: `calc(100% - ${NAV.W_MINI + 1}px)`
                    })
                })
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: { lg: 5 }
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
