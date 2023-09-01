import { memo, useCallback, useState } from "react";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";

import { navVerticalConfig } from "../config";
import { NavConfigProps, NavListProps, NavSectionProps } from "../types";

import NavList from "./nav-list";
import { StyledSubheader } from "./styles";

type GroupProps = {
    subheader: string;
    items: NavListProps[];
    config: NavConfigProps;
};

const Group = ({ subheader, items, config }: GroupProps) => {
    const [open, setOpen] = useState(true);

    const handleToggle = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    const renderContent = items.map(list => (
        <NavList
            key={list.title + list.path}
            config={config}
            data={list}
            depth={1}
            hasChild={!!list.children}
        />
    ));

    return (
        <List disablePadding sx={{ px: 2 }}>
            {subheader ? (
                <>
                    <StyledSubheader config={config} disableGutters disableSticky onClick={handleToggle}>
                        {subheader}
                    </StyledSubheader>

                    <Collapse in={open}>{renderContent}</Collapse>
                </>
            ) : (
                renderContent
            )}
        </List>
    );
};

const NavSectionVertical = ({
    data, config, sx, ...other
}: NavSectionProps) => (
    <Stack sx={sx} {...other}>
        {data.map((group, index) => (
            <Group
                key={group.subheader || index}
                config={navVerticalConfig(config)}
                items={group.items}
                subheader={group.subheader}
            />
        ))}
    </Stack>
);

export default memo(NavSectionVertical);
