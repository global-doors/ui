import { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { Logo } from "src/components/logo";
import { NavSectionVertical } from "src/components/nav-section";
import { Scrollbar } from "src/components/scrollbar";
import useMockedUser from "src/hooks/use-mocked-user";
import { useResponsive } from "src/hooks/use-responsive";
import { usePathname } from "src/routes/hooks";

import { NavToggleButton } from "../_common";
import { NAV } from "../config-layout";

import useNavData from "./config-navigation";

type Props = {
    openNav: boolean;
    onCloseNav: VoidFunction;
};

const NavVertical = ({ openNav, onCloseNav }: Props) => {
    const { user } = useMockedUser();

    const pathname = usePathname();

    const lgUp = useResponsive("up", "lg");

    const navData = useNavData();

    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                "& .simplebar-content": {
                    height: 1,
                    display: "flex",
                    flexDirection: "column"
                }
            }}
        >
            <Logo sx={{ mt: 3, ml: 4, mb: 1 }} />

            <NavSectionVertical
                config={{
                    currentRole: user?.role || "admin"
                }}
                data={navData}
            />

            <Box sx={{ flexGrow: 1 }} />
        </Scrollbar>
    );

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV.W_VERTICAL }
            }}
        >
            <NavToggleButton />

            {lgUp ? (
                <Stack
                    sx={{
                        height: 1,
                        position: "fixed",
                        width: NAV.W_VERTICAL,
                        borderRight: theme => `dashed 1px ${theme.palette.divider}`
                    }}
                >
                    {renderContent}
                </Stack>
            ) : (
                <Drawer
                    onClose={onCloseNav}
                    open={openNav}
                    PaperProps={{
                        sx: {
                            width: NAV.W_VERTICAL
                        }
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </Box>
    );
};

export default NavVertical;
