import { forwardRef } from "react";
import Link from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { RouterLink } from "src/routes/components";

import { Iconify } from "../../iconify";
import { NavConfigProps, NavItemProps } from "../types";

import { StyledIcon, StyledItem } from "./styles";

type Props = NavItemProps & {
    config: NavConfigProps;
};

const NavItem = forwardRef<HTMLDivElement, Props>(
    ({
        item, depth, open, active, externalLink, config, ...other
    }, ref) => {
        const theme = useTheme();

        const {
            title, path, icon, children, disabled, caption, roles
        } = item;

        const subItem = depth !== 1;

        const renderContent = (
            <StyledItem
                ref={ref}
                active={active}
                config={config}
                depth={depth}
                disabled={disabled}
                disableGutters
                open={open}
                {...other}
            >
                {icon && (
                    <StyledIcon
                        size={config.iconSize}
                        sx={{
                            ...(subItem && { mr: 1.5 })
                        }}
                    >
                        {icon}
                    </StyledIcon>
                )}

                {!(config.hiddenLabel && !subItem) && (
                    <ListItemText
                        primary={title}
                        primaryTypographyProps={{
                            noWrap: true,
                            fontSize: 10,
                            lineHeight: "16px",
                            textAlign: "center",
                            textTransform: "capitalize",
                            fontWeight: active ? "fontWeightBold" : "fontWeightSemiBold",
                            ...(subItem && {
                                textAlign: "unset",
                                fontSize: theme.typography.body2.fontSize,
                                lineHeight: theme.typography.body2.lineHeight,
                                fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium"
                            })
                        }}
                        sx={{
                            width: 1,
                            flex: "unset",
                            ...(!subItem && {
                                px: 0.5,
                                mt: 0.5
                            })
                        }}
                    />
                )}

                {caption && (
                    <Tooltip arrow placement="right" title={caption}>
                        <Iconify
                            icon="eva:info-outline"
                            sx={{
                                color: "text.disabled",
                                ...(!subItem && {
                                    top: 11,
                                    left: 6,
                                    position: "absolute"
                                })
                            }}
                            width={16}
                        />
                    </Tooltip>
                )}

                {!!children && (
                    <Iconify
                        icon="eva:arrow-ios-forward-fill"
                        sx={{
                            top: 11,
                            right: 6,
                            position: "absolute"
                        }}
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
                    href={path}
                    rel="noopener"
                    sx={{
                        width: 1,
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

        // Default
        return (
            <Link
                component={RouterLink}
                href={path}
                sx={{
                    width: 1,
                    ...(disabled && {
                        cursor: "default"
                    })
                }}
                underline="none"
            >
                {renderContent}
            </Link>
        );
    }
);

export default NavItem;
