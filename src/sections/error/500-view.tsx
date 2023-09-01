import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { m } from "framer-motion";
import { SeverErrorIllustration } from "src/assets/illustrations";
import { MotionContainer, varBounce } from "src/components/animate";
import { RouterLink } from "src/routes/components";

const Page500 = () => (
    <MotionContainer>
        <m.div variants={varBounce().in}>
            <Typography sx={{ mb: 2 }} variant="h3">
          500 Internal Server Error
            </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
            <Typography sx={{ color: "text.secondary" }}>
          There was an error, please try again later.
            </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
            <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Button component={RouterLink} href="/" size="large" variant="contained">
        Go to Home
        </Button>
    </MotionContainer>
);

export default Page500;
