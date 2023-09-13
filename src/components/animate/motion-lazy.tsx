import { ReactNode } from "react";
import { domMax, LazyMotion, m } from "framer-motion";

type Props = {
    children: ReactNode;
};

export const MotionLazy = ({ children }: Props) => (
    <LazyMotion features={domMax} strict>
        <m.div style={{ height: "100%" }}>
            {" "}
            {children}
            {" "}
        </m.div>
    </LazyMotion>
);
