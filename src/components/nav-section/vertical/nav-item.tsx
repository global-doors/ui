import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import { RouterLink } from "src/routes/components";

import { Iconify } from "../../iconify";
import { NavConfigProps, NavItemProps } from "../types";

import { StyledDotIcon, StyledIcon, StyledItem } from "./styles";

type Props = NavItemProps & {
    config: NavConfigProps;
};

const NavItem = ({
    item,
    open,
    depth,
    active,
    config,
    externalLink,
    ...other
}: Props) => {
    const {
        title, path, icon, info, children, disabled, caption, roles
    } = item;

    const subItem = depth !== 1;

    const renderContent = (
        <StyledItem
            active={active}
            config={config}
            depth={depth}
            disabled={disabled}
            disableGutters
            {...other}
        >
            <>
                {icon && <StyledIcon size={config.iconSize}>{icon}</StyledIcon>}

                {subItem && (
                    <StyledIcon size={config.iconSize}>
                        <StyledDotIcon active={active} />
                    </StyledIcon>
                )}
            </>

            {!(config.hiddenLabel && !subItem) && (
                <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                        noWrap: true,
                        typography: "body2",
                        textTransform: "capitalize",
                        fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium"
                    }}
                    secondary={
                        caption ? (
                            <Tooltip placement="top-start" title={caption}>
                                <span>{caption}</span>
                            </Tooltip>
                        ) : null
                    }
                    secondaryTypographyProps={{
                        noWrap: true,
                        component: "span",
                        typography: "caption",
                        color: "text.disabled"
                    }}
                />
            )}

            {info && (
                <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
                    {info}
                </Box>
            )}

            {!!children && (
                <Iconify
                    icon={open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"}
                    sx={{ ml: 1, flexShrink: 0 }}
                    width={16}
                />
            )}
        </StyledItem>
    );

    // Hidden item by role
    if (roles && !roles.includes(`${config.currentRole}`)) {
        return null;
    }

    // External link
    if (externalLink) {
        return (
            <Link
                color="inherit"
                href={path}
                rel="noopener"
                sx={{
                    ...(disabled && {
                        cursor: "default"
                    })
                }}
                target="_blank"
                underline="none"
            >
                {renderContent}
            </Link>
        );
    }

    // Has child
    if (children) {
        return renderContent;
    }

    // Default
    return (
        <Link
            color="inherit"
            component={RouterLink}
            href={path}
            sx={{
                ...(disabled && {
                    cursor: "default"
                })
            }}
            underline="none"
        >
            {renderContent}
        </Link>
    );
};

export default NavItem;
