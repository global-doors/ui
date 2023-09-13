import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { alpha, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { m } from "framer-motion";
import { varHover } from "src/components/animate";
import { CustomPopover, usePopover } from "src/components/custom-popover";
import { FullscreenButton } from "src/components/fullscreen-button";
import { ThemeModeOptions } from "src/components/theme-mode-options";
import useAuthenticate from "src/hooks/useAuthenticate";
import { useRouter } from "src/routes/hooks";
import paths from "src/routes/paths";

const OPTIONS = [
    {
        label: "Home",
        linkTo: "/"
    },
    {
        label: "Settings",
        linkTo: paths.dashboard.settings
    }
];

const AccountPopover = () => {
    const theme = useTheme();

    const router = useRouter();

    const { user } = useAuthenticate();

    const { logout } = useAuthenticate();

    const popover = usePopover();

    const handleLogout = async () => {
        try {
            logout();
            popover.onClose();
            router.replace("/");
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    };

    const handleClickItem = (path: string) => {
        popover.onClose();
        router.push(path);
    };

    return (
        <>
            <IconButton
                component={m.button}
                onClick={popover.onOpen}
                sx={{
                    width: 40,
                    height: 40,
                    background: alpha(theme.palette.grey[500], 0.08),
                    ...(popover.open && {
                        background: `linear-gradient(135deg,
                         ${theme.palette.primary.light} 0%,
                         ${theme.palette.primary.main} 100%)`
                    })
                }}
                variants={varHover(1.05)}
                whileHover="hover"
                whileTap="tap"
            >
                <Avatar
                    alt={user?.name}
                    sx={{
                        width: 36,
                        height: 36,
                        border: `solid 2px ${theme.palette.background.default}`,
                        ...(popover.open && {
                            color: theme.palette.common.white
                        })
                    }}
                >
                    {user?.name?.charAt(0).toUpperCase()}
                </Avatar>
            </IconButton>

            <CustomPopover onClose={popover.onClose} open={popover.open} sx={{ width: 200, p: 0 }}>
                <Box sx={{ p: 2, pb: 1.5 }}>
                    <Typography noWrap variant="subtitle2">
                        {user?.name}
                    </Typography>

                    <Typography noWrap sx={{ color: "text.secondary" }} variant="body2">
                        {user?.name}
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: "dashed" }} />

                <Stack sx={{ bgcolor: theme.palette.background.neutral, p: 1 }}>
                    <ThemeModeOptions />
                </Stack>

                <Divider sx={{ borderStyle: "dashed" }} />

                <Stack sx={{ p: 1 }}>
                    <FullscreenButton />
                </Stack>

                <Divider sx={{ borderStyle: "dashed" }} />

                <Stack sx={{ p: 1 }}>
                    {OPTIONS.map(option => (
                        <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>

                <Divider sx={{ borderStyle: "dashed" }} />

                <MenuItem
                    onClick={handleLogout}
                    sx={{ m: 1, fontWeight: "fontWeightBold", color: "error.main" }}
                >
                    Logout
                </MenuItem>
            </CustomPopover>
        </>
    );
};

export default AccountPopover;
