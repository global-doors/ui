import { memo } from "react";
import Stack from "@mui/material/Stack";

import { navMiniConfig } from "../config";
import { NavConfigProps, NavListProps, NavSectionProps } from "../types";

import NavList from "./nav-list";

type GroupProps = {
    items: NavListProps[];
    config: NavConfigProps;
};

const Group = ({ items, config }: GroupProps) => (
    <>
        {items.map(list => (
            <NavList
                key={list.title + list.path}
                config={config}
                data={list}
                depth={1}
                hasChild={!!list.children}
            />
        ))}
    </>
);

const NavSectionMini = ({
    data, config, sx, ...other
}: NavSectionProps) => (
    <Stack sx={sx} {...other}>
        {data.map((group, index) => (
            <Group key={group.subheader || index} config={navMiniConfig(config)} items={group.items} />
        ))}
    </Stack>
);

export default memo(NavSectionMini);
