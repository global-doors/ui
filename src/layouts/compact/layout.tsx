import { ReactNode } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { HeaderSimple as Header } from "../_common";

type Props = {
    children: ReactNode;
};

const CompactLayout = ({ children }: Props) => (
    <>
        <Header />

        <Container component="main">
            <Stack
                sx={{
                    py: 12,
                    m: "auto",
                    maxWidth: 400,
                    minHeight: "100vh",
                    textAlign: "center",
                    justifyContent: "center"
                }}
            >
                {children}
            </Stack>
        </Container>
    </>
);

export default CompactLayout;
