import { menuItemClasses } from "@mui/material/MenuItem";
import Popover, { PopoverOrigin } from "@mui/material/Popover";

import StyledArrow from "./styles";
import { MenuPopoverProps } from "./types";
import getPosition from "./utils";

const CustomPopover = ({
    open,
    children,
    arrow = "top-right",
    hiddenArrow,
    sx,
    ...other
}: MenuPopoverProps) => {
    const { style, anchorOrigin, transformOrigin } = getPosition(arrow);

    return (
        <Popover
            anchorEl={open}
            anchorOrigin={anchorOrigin as PopoverOrigin}
            open={Boolean(open)}
            slotProps={{
                paper: {
                    sx: {
                        width: "auto",
                        overflow: "inherit",
                        ...style,
                        [`& .${menuItemClasses.root}`]: {
                            "& svg": {
                                mr: 2,
                                flexShrink: 0
                            }
                        },
                        ...sx
                    }
                }
            }}
            transformOrigin={transformOrigin as PopoverOrigin}
            {...other}
        >
            {!hiddenArrow && <StyledArrow arrow={arrow} />}

            {children}
        </Popover>
    );
};

export default CustomPopover;
