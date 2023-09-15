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
    console.log(data);
    return (
        <>
            <Helmet>
                <title> Sales Order</title>
            </Helmet>

            <Container maxWidth="xl">
                <PageHeader
                    heading={`Sales Order: ${data?.OrderNumber}`}
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
                                <KeyValueData label="Customer Name" value={data?.Customer.CustomerName} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Customer Code" value={data?.Customer.CustomerCode} />
                            </Grid2>
                        </Grid2>
                    </CardContent>
                    <CardHeader title="Delivery" />
                    <CardContent>
                        <Grid2 container>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Contact" value={data?.DeliveryContact as string} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Name" value={data?.DeliveryName} />
                            </Grid2>
                            <Grid2 sm={6} xs={0} />
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Street Address" value={data?.DeliveryStreetAddress} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Suburb" value={data?.DeliverySuburb} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery City" value={data?.DeliveryCity} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Postcode" value={data?.DeliveryPostCode} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Delivery Country" value={data?.DeliveryCountry} />
                            </Grid2>
                        </Grid2>
                    </CardContent>
                    <CardHeader title="Order" />
                    <CardContent>
                        <Grid2 container>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Sales Person" value={data?.SalesPerson.FullName} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Sales Order Group" value={data?.SalesOrderGroup as string} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Order Date" value={data?.OrderDate as string} />
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <KeyValueData label="Required Date" value={data?.RequiredDate as string} />
                            </Grid2>
                        </Grid2>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default SingleOrder;
