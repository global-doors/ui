import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import LinkItem from "./link-item";
import { CustomBreadcrumbsProps } from "./types";

const Separator = () => (
    <Box
        component="span"
        sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            bgcolor: "text.disabled"
        }}
    />
);

const PageHeader = ({
    links,
    action,
    heading,
    moreLink,
    activeLast,
    sx,
    ...other
}: CustomBreadcrumbsProps) => {
    const lastLink = links[links.length - 1].name;

    return (
        <Box sx={{ ...sx }}>
            <Stack alignItems="center" direction="row">
                <Box sx={{ flexGrow: 1 }}>
                    {/* HEADING */}
                    {heading && (
                        <Typography gutterBottom variant="h4">
                            {heading}
                        </Typography>
                    )}

                    {/* BREADCRUMBS */}
                    {!!links.length && (
                        <Breadcrumbs separator={<Separator />} {...other}>
                            {links.map(link => (
                                <LinkItem
                                    key={link.name || ""}
                                    activeLast={activeLast}
                                    disabled={link.name === lastLink}
                                    link={link}
                                />
                            ))}
                        </Breadcrumbs>
                    )}
                </Box>

                {
                    action && (
                        <Box sx={{ flexShrink: 0 }}>
                            {" "}
                            {action}
                            {" "}
                        </Box>
                    )
                }
            </Stack>

            {/* MORE LINK */}
            {!!moreLink && (
                <Box sx={{ mt: 2 }}>
                    {moreLink.map(href => (
                        <Link
                            key={href}
                            href={href}
                            rel="noopener"
                            sx={{ display: "table" }}
                            target="_blank"
                            variant="body2"
                        >
                            {href}
                        </Link>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default PageHeader;
