import { Helmet } from "react-helmet-async";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { m } from "framer-motion";
import { MotionContainer, varBounce } from "src/components/animate";
import { RouterLink } from "src/routes/components";

const NotFoundPage = () => (
    <>
        <Helmet>
            <title> 404 Page Not Found!</title>
        </Helmet>

        <MotionContainer>
            <m.div variants={varBounce().in}>
                <Typography sx={{ mb: 2 }} variant="h3">
            Sorry, Page Not Found!
                </Typography>
            </m.div>

            <m.div variants={varBounce().in}>
                <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.
                </Typography>
            </m.div>
            <br />
            <Button component={RouterLink} href="/" size="large" variant="contained">
          Go to Home
            </Button>
        </MotionContainer>
    </>
);

export default NotFoundPage;
