import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import { CardContent, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { PageHeader } from "src/components/page-header";
import useSingleOrder from "src/hooks/query/useSingleOrder";
import paths from "src/routes/paths";

const KeyValueData = ({
    label,
    value
}: { label: string, value?: string }) => (
    <>
        <Typography color="text.secondary" variant="caption">
            {label}
        </Typography>
        <Typography>
            {value ?? "-"}
        </Typography>
    </>
);

const SingleOrder = () => {
    const params = useParams<{ id: string }>();
    const { data } = useSingleOrder(params.id);
    console.log(data?.Items?.[0]);
    const order = data?.Items?.[0];
    return (
        <>
            <Helmet>
                <title> Sales Order</title>
            </Helmet>

            <Container maxWidth="xl">
                <PageHeader
                    heading={`Sales Order: ${order?.OrderNumber}`}
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

                <Card>
                    <CardHeader title="Customer" />
                    <CardContent>
                        <Grid2 container>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Customer Name" value={order?.Customer.CustomerName} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Customer Code" value={order?.Customer.CustomerCode} />
                            </Grid2>
                        </Grid2>
                    </CardContent>
                    <CardHeader title="Delivery" />
                    <CardContent>
                        <Grid2 container>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Contact" value={order?.DeliveryContact as string} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Name" value={order?.DeliveryName} />
                            </Grid2>
                            <Grid2 sm={6} xs={0} />
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Street Address" value={order?.DeliveryStreetAddress} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Suburb" value={order?.DeliverySuburb} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery City" value={order?.DeliveryCity} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Postcode" value={order?.DeliveryPostCode} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Country" value={order?.DeliveryCountry} />
                            </Grid2>
                        </Grid2>
                    </CardContent>
                    <CardHeader title="Order" />
                    <CardContent>
                        <Grid2 container>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Sales Person" value={order?.SalesPerson.FullName} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Sales Order Group" value={order?.SalesOrderGroup as string} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Order Date" value={order?.OrderDate as string} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Required Date" value={order?.RequiredDate as string} />
                            </Grid2>
                        </Grid2>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default SingleOrder;
