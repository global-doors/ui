import { domMax, LazyMotion, m } from "framer-motion";

type Props = {
    children: React.ReactNode;
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
