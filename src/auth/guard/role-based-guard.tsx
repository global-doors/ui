import Container from "@mui/material/Container";
import { SxProps, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { m } from "framer-motion";
import { ForbiddenIllustration } from "src/assets/illustrations";
import { MotionContainer, varBounce } from "src/components/animate";
import useMockedUser from "src/hooks/use-mocked-user";

type RoleBasedGuardProp = {
    hasContent?: boolean;
    roles?: string[];
    children: React.ReactNode;
    sx?: SxProps<Theme>;
};

const RoleBasedGuard = ({
    hasContent, roles, children, sx
}: RoleBasedGuardProp) => {
    // Logic here to get current user role
    const { user } = useMockedUser();

    // const currentRole = 'user';
    const currentRole = user?.role; // admin;

    if (typeof roles !== "undefined" && !roles.includes(currentRole)) {
        return hasContent ? (
            <Container component={MotionContainer} sx={{ textAlign: "center", ...sx }}>
                <m.div variants={varBounce().in}>
                    <Typography sx={{ mb: 2 }} variant="h3">
            Permission Denied
                    </Typography>
                </m.div>

                <m.div variants={varBounce().in}>
                    <Typography sx={{ color: "text.secondary" }}>
            You do not have permission to access this page
                    </Typography>
                </m.div>

                <m.div variants={varBounce().in}>
                    <ForbiddenIllustration
                        sx={{
                            height: 260,
                            my: { xs: 5, sm: 10 }
                        }}
                    />
                </m.div>
            </Container>
        ) : null;
    }

    return (
        <>
            {" "}
            {children}
            {" "}
        </>
    );
};

export default RoleBasedGuard;
