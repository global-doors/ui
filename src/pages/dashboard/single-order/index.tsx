import { Helmet } from "react-helmet-async";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { PageHeader } from "src/components/page-header";
import paths from "src/routes/paths";

const SingleOrder = () => (
    <>
        <Helmet>
            <title> Sales Order</title>
        </Helmet>

        <Container maxWidth="xl">
            <PageHeader
                heading="Sales Order"
                links={[
                    {
                        name: "Sales",
                        href: paths.dashboard.root
                    },
                    { name: "Sales Order" }
                ]}
                sx={{
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }}
            />

            <Card />
        </Container>
    </>
);

export default SingleOrder;
