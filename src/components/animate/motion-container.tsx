import Box, { BoxProps } from "@mui/material/Box";
import { m, MotionProps } from "framer-motion";

import { varContainer } from "./variants";

type IProps = BoxProps & MotionProps;

export interface Props extends IProps {
    animate?: boolean;
    action?: boolean;
}

const MotionContainer = ({
    animate, action = false, children, ...other
}: Props) => {
    if (action) {
        return (
            <Box
                animate={animate ? "animate" : "exit"}
                component={m.div}
                initial={false}
                variants={varContainer()}
                {...other}
            >
                {children}
            </Box>
        );
    }

    return (
        <Box
            animate="animate"
            component={m.div}
            exit="exit"
            initial="initial"
            variants={varContainer()}
            {...other}
        >
            {children}
        </Box>
    );
};

export default MotionContainer;
