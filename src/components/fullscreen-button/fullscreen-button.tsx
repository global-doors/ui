import { useCallback, useState } from "react";
import ButtonBase from "@mui/material/ButtonBase";
import { alpha } from "@mui/material/styles";
import { Iconify } from "src/components/iconify";

const FullscreenButton = () => {
    const [fullscreen, setFullscreen] = useState(false);

    const onToggleFullScreen = useCallback(async () => {
        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();
            setFullscreen(true);
        } else if (document.exitFullscreen) {
            await document.exitFullscreen();
            setFullscreen(false);
        }
    }, []);

    return (
        <ButtonBase
            onClick={onToggleFullScreen}
            sx={{
                width: 1,
                height: 40,
                borderRadius: 1,
                color: "text.secondary",
                typography: "subtitle2",
                border: theme => `solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
                ...(fullscreen && {
                    color: "text.primary"
                }),
                "& .svg-color": {
                    background: theme =>
                        `linear-gradient(135deg,
                        ${theme.palette.grey[500]} 0%,
                        ${theme.palette.grey[600]} 100%)`,
                    ...(fullscreen && {
                        background: theme =>
                            `linear-gradient(135deg,
                            ${theme.palette.primary.light} 0%,
                             ${theme.palette.primary.main} 100%)`
                    })
                }
            }}
        >
            <Iconify
                icon={
                    fullscreen
                        ? "solar:quit-full-screen-square-line-duotone"
                        : "solar:full-screen-square-line-duotone"
                }
                sx={{ mr: 1 }}
            />
            {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </ButtonBase>
    );
};

export default FullscreenButton;
