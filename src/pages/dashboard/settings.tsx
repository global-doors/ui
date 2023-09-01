import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Settings = () => (
    <>
        <Helmet>
            <title>Settings</title>
        </Helmet>

        <Container maxWidth="xl">
            <Typography variant="h4"> Settings </Typography>

            <Box
                sx={{
                    mt: 5,
                    width: 1,
                    height: 320,
                    borderRadius: 2,
                    bgcolor: theme => alpha(theme.palette.grey[500], 0.04),
                    border: theme => `dashed 1px ${theme.palette.divider}`
                }}
            />
        </Container>
    </>
);

export default Settings;
