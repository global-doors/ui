import { ReactElement } from "react";
import { ListItemButtonProps } from "@mui/material/ListItemButton";
import { StackProps } from "@mui/material/Stack";

export type NavConfigProps = {
    hiddenLabel?: boolean;
    itemGap?: number;
    iconSize?: number;
    itemRadius?: number;
    itemPadding?: string;
    currentRole?: string;
    itemSubHeight?: number;
    itemRootHeight?: number;
};

export type NavItemProps = ListItemButtonProps & {
    item: NavListProps;
    depth: number;
    open?: boolean;
    active: boolean;
    externalLink?: boolean;
};

export type NavListProps = {
    title: string;
    path: string;
    icon?: ReactElement;
    info?: ReactElement;
    caption?: string;
    disabled?: boolean;
    roles?: string[];
    children?: any;
};

export type NavSectionProps = StackProps & {
    data: {
        subheader: string;
        items: NavListProps[];
    }[];
    config?: NavConfigProps;
};
