import { useCallback, useEffect, useRef, useState } from "react";
import { appBarClasses } from "@mui/material/AppBar";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import { usePathname } from "src/routes/hooks";
import useActiveLink from "src/routes/hooks/use-active-link";

import { NavConfigProps, NavListProps } from "../types";

import NavItem from "./nav-item";

type NavListSubProps = {
    data: NavListProps[];
    depth: number;
    config: NavConfigProps;
};

const NavSubList = ({ data, depth, config }: NavListSubProps) => (
    <Stack spacing={0.5}>
        {data.map(list => (
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            <NavList
                key={list.title + list.path}
                config={config}
                data={list}
                depth={depth + 1}
                hasChild={!!list.children}
            />
        ))}
    </Stack>
);

type NavListRootProps = {
    data: NavListProps;
    depth: number;
    hasChild: boolean;
    config: NavConfigProps;
};

const NavList = ({
    data, depth, hasChild, config
}: NavListRootProps) => {
    const navRef = useRef(null);

    const pathname = usePathname();

    const active = useActiveLink(data.path, hasChild);

    const externalLink = data.path.includes("http");

    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    useEffect(() => {
        if (open) handleClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    useEffect(() => {
        const appBarEl = Array.from(
            document.querySelectorAll(`.${appBarClasses.root}`)
        ) as Array<HTMLElement>;

        // Reset styles when hover
        const styles = () => {
            document.body.style.overflow = "";
            document.body.style.padding = "";
            // Apply for Window
            appBarEl.forEach(elem => {
                // eslint-disable-next-line no-param-reassign
                elem.style.padding = "";
            });
        };

        if (open) {
            styles();
        } else {
            styles();
        }
    }, [open]);

    return (
        <>
            <NavItem
                ref={navRef}
                active={active}
                config={config}
                depth={depth}
                externalLink={externalLink}
                item={data}
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
                open={open}
            />

            {hasChild && (
                <Popover
                    anchorEl={navRef.current}
                    anchorOrigin={{ vertical: "center", horizontal: "right" }}
                    open={open}
                    slotProps={{
                        paper: {
                            onMouseEnter: handleOpen,
                            onMouseLeave: handleClose,
                            sx: {
                                mt: 0.5,
                                width: 160,
                                ...(open && {
                                    pointerEvents: "auto"
                                })
                            }
                        }
                    }}
                    sx={{
                        pointerEvents: "none"
                    }}
                    transformOrigin={{ vertical: "center", horizontal: "left" }}
                >
                    <NavSubList config={config} data={data.children} depth={depth} />
                </Popover>
            )}
        </>
    );
};

export default NavList;
