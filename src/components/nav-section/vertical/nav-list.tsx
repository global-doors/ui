import { useCallback, useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
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
    <>
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
    </>
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
    const pathname = usePathname();

    const active = useActiveLink(data.path, hasChild);

    const externalLink = data.path.includes("http");

    const [open, setOpen] = useState(active);

    const handleToggle = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    useEffect(() => {
        if (!active) {
            handleClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <NavItem
                active={active}
                config={config}
                depth={depth}
                externalLink={externalLink}
                item={data}
                onClick={handleToggle}
                open={open}
            />

            {hasChild && (
                <Collapse in={open} unmountOnExit>
                    <NavSubList config={config} data={data.children} depth={depth} />
                </Collapse>
            )}
        </>
    );
};

export default NavList;
