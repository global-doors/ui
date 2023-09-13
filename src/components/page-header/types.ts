import { ReactElement, ReactNode } from "react";
import { BreadcrumbsProps } from "@mui/material/Breadcrumbs";

export type BreadcrumbsLinkProps = {
    name?: string;
    href?: string;
    icon?: ReactElement;
};

export interface CustomBreadcrumbsProps extends BreadcrumbsProps {
    heading?: string;
    moreLink?: string[];
    activeLast?: boolean;
    action?: ReactNode;
    links: BreadcrumbsLinkProps[];
}
