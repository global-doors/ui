import Box, { BoxProps } from "@mui/material/Box";
import { m, MotionProps } from "framer-motion";
import { useResponsive } from "src/hooks/use-responsive";

import { varContainer } from "./variants";

type IProps = BoxProps & MotionProps;

interface Props extends IProps {
    children: React.ReactNode;
    disableAnimatedMobile?: boolean;
}

const MotionViewport = ({
    children,
    disableAnimatedMobile = true,
    ...other
}: Props) => {
    const smDown = useResponsive("down", "sm");

    if (smDown && disableAnimatedMobile) {
        return <Box {...other}>{children}</Box>;
    }

    return (
        <Box
            component={m.div}
            initial="initial"
            variants={varContainer()}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="animate"
            {...other}
        >
            {children}
        </Box>
    );
};

export default MotionViewport;
