import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { m } from "framer-motion";
import { ForbiddenIllustration } from "src/assets/illustrations";
import { MotionContainer, varBounce } from "src/components/animate";
import { RouterLink } from "src/routes/components";

const View403 = () => (
    <MotionContainer>
        <m.div variants={varBounce().in}>
            <Typography sx={{ mb: 2 }} variant="h3">
                    No permission
            </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
            <Typography sx={{ color: "text.secondary" }}>
                    The page you&apos;re trying access has restricted access.
                <br />
                    Please refer to your system administrator
            </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
            <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Button component={RouterLink} href="/" size="large" variant="contained">
                Go to Home
        </Button>
    </MotionContainer>
);
export default View403;
