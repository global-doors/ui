import { ReactNode } from "react";
import Box from "@mui/material/Box";
import { useSettingsContext } from "src/components/settings";
import useBoolean from "src/hooks/use-boolean";
import { useResponsive } from "src/hooks/use-responsive";

import Header from "./header";
import Main from "./main";
import NavMini from "./nav-mini";
import NavVertical from "./nav-vertical";

type Props = {
    children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
    const settings = useSettingsContext();

    const lgUp = useResponsive("up", "lg");

    const nav = useBoolean();

    const isMini = settings.themeLayout === "mini";

    const renderNavMini = <NavMini />;

    const renderNavVertical = <NavVertical onCloseNav={nav.onFalse} openNav={nav.value} />;

    if (isMini) {
        return (
            <>
                <Header onOpenNav={nav.onTrue} />

                <Box
                    sx={{
                        minHeight: 1,
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" }
                    }}
                >
                    {lgUp ? renderNavMini : renderNavVertical}

                    <Main>{children}</Main>
                </Box>
            </>
        );
    }

    return (
        <>
            <Header onOpenNav={nav.onTrue} />

            <Box
                sx={{
                    minHeight: 1,
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" }
                }}
            >
                {renderNavVertical}

                <Main>{children}</Main>
            </Box>
        </>
    );
};

export default DashboardLayout;
