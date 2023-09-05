import { SyntheticEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { CardContent, Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FormProvider, RHFSelect, RHFTextField } from "src/components/hook-form";
import RHFDatePicker from "src/components/hook-form/rhf-date-picker";
import { Iconify } from "src/components/iconify";
import { PageHeader } from "src/components/page-header";
import OrderLinesTab from "src/pages/dashboard/add-order/order-lines-tab";
import paths from "src/routes/paths";
import { AddSalesOrderForm } from "src/types/forms";

const AddSalesOrder = () => {
    const defaultValues = {
        customerCode: "",
        customerName: "",
        customerRef: "",
        discount: "",
        taxRate: "",
        warehouse: "",

        deliveryContact: "",
        deliveryName: "",
        addressLine1: "",
        addressLine2: "",
        suburb: "",
        city: "",
        state: "",
        postcode: "",
        county: "",

        salesPerson: "",
        salesOrderGroup: "",
        orderDate: "",
        requiredDate: "",
        salesOrderTemplate: "",
        packingSlipTemplate: "",

        lines: [],
        charges: []
    };
    const methods = useForm<AddSalesOrderForm>({
        defaultValues,
        mode: "onChange"
    });

    const tabs = ["Order Lines", "Shipments", "Invoices", "Credit"];
    const [currentTab, setCurrentTab] = useState("Order Lines");
    const onChangeTab = (event: SyntheticEvent<Element, Event>, newValue: string) => setCurrentTab(newValue);

    return (
        <>
            <Helmet>
                <title> Add Sales Order</title>
            </Helmet>

            <Container maxWidth="xl">
                <PageHeader
                    action={
                        <Stack direction="row" spacing={1}>
                            <Button endIcon={<Iconify icon="solar:alt-arrow-down-line-duotone" />} variant="outlined">
                                Order
                            </Button>
                            <Button variant="contained">
                                Save
                            </Button>
                        </Stack>
                    }
                    heading="Add Sales Order"
                    links={[
                        { name: "Sales", href: paths.dashboard.root },
                        { name: "Add Sales Order" }
                    ]}
                    sx={{
                        mb: { xs: 3, md: 5 }
                    }}
                >
                    Add Sales Order
                </PageHeader>

                <FormProvider methods={methods}>
                    <Stack spacing={2}>

                        <Card>
                            <CardContent>
                                <Stack spacing={2}>
                                    <Typography variant="subtitle1">
                                        Customer
                                    </Typography>
                                    <Box
                                        columnGap={2}
                                        display="grid"
                                        gridTemplateColumns={{
                                            xs: "repeat(1, 1fr)",
                                            md: "repeat(4, 1fr)"
                                        }}
                                        rowGap={3}
                                    >
                                        <RHFTextField label="Customer Code" name="customerCode" />
                                        <RHFTextField label="Customer Name" name="customerName" />
                                        <RHFTextField label="Customer Reference" name="customerRef" />
                                    </Box>
                                    <Box
                                        columnGap={2}
                                        display="grid"
                                        gridTemplateColumns={{
                                            xs: "repeat(1, 1fr)",
                                            md: "repeat(4, 1fr)"
                                        }}
                                        rowGap={3}
                                    >
                                        <RHFTextField label="Discount" name="discount" />
                                        <RHFSelect label="Tax Rate" name="taxRate" size="small" />
                                        <RHFSelect label="Order Warehouse" name="warehouse" size="small" />
                                    </Box>
                                </Stack>

                                <Stack spacing={2}>
                                    <Typography mt={2} variant="subtitle1">
                                        Delivery
                                    </Typography>
                                    <Box
                                        columnGap={2}
                                        display="grid"
                                        gridTemplateColumns={{
                                            xs: "repeat(1, 1fr)",
                                            md: "repeat(4, 1fr)"
                                        }}
                                        rowGap={3}
                                    >
                                        <RHFSelect label="Delivery Contact" name="deliveryContact" size="small" />
                                        <RHFTextField label="Delivery Name" name="deliveryName" />
                                    </Box>
                                    <Box
                                        columnGap={2}
                                        display="grid"
                                        gridTemplateColumns={{
                                            xs: "repeat(1, 1fr)",
                                            md: "repeat(4, 1fr)"
                                        }}
                                        rowGap={3}
                                    >
                                        <RHFTextField label="Address Line 1" name="addressLine1" />
                                        <RHFTextField label="Address Line 2" name="addressLine2" />
                                        <RHFTextField label="Suburb" name="suburb" />
                                    </Box>
                                    <Box
                                        columnGap={2}
                                        display="grid"
                                        gridTemplateColumns={{
                                            xs: "repeat(1, 1fr)",
                                            md: "repeat(4, 1fr)"
                                        }}
                                        rowGap={3}
                                    >
                                        <RHFTextField label="City" name="city" />
                                        <RHFTextField label="State/Region" name="state" />
                                        <RHFTextField label="Postcode" name="postcode" />
                                        <RHFTextField label="County" name="county" />
                                    </Box>
                                </Stack>

                                <Stack spacing={2}>
                                    <Typography mt={2} variant="subtitle1">
                                        Order
                                    </Typography>
                                    <Box
                                        columnGap={2}
                                        display="grid"
                                        gridTemplateColumns={{
                                            xs: "repeat(1, 1fr)",
                                            md: "repeat(4, 1fr)"
                                        }}
                                        rowGap={3}
                                    >
                                        <RHFSelect label="Sales Person" name="salesPerson" size="small" />
                                        <RHFSelect label="Sales Order Group" name="salesOrderGroup" size="small" />
                                        <RHFDatePicker label="Order Date" name="orderDate" />
                                        <RHFDatePicker label="Required Date" name="requiredDate" />
                                    </Box>
                                    <Box
                                        columnGap={2}
                                        display="grid"
                                        gridTemplateColumns={{
                                            xs: "repeat(1, 1fr)",
                                            md: "repeat(4, 1fr)"
                                        }}
                                        rowGap={3}
                                    >
                                        <RHFSelect
                                            label="Sales Order Template"
                                            name="salesOrderTemplate"
                                            size="small"
                                        />
                                        <RHFSelect
                                            label="Packing Slip Template"
                                            name="packingSlipTemplate"
                                            size="small"
                                        />
                                    </Box>
                                </Stack>

                            </CardContent>
                        </Card>
                        <Card>
                            <Tabs
                                onChange={onChangeTab}
                                sx={{ px: 2 }}
                                value={currentTab}
                            >
                                {
                                    tabs.map(tab =>
                                        <Tab
                                            key={tab}
                                            label={tab}
                                            value={tab}
                                        />
                                    )
                                }
                            </Tabs>
                            <CardContent>
                                {
                                    currentTab === "Order Lines" &&
                                    <OrderLinesTab methods={methods} />
                                }
                            </CardContent>
                        </Card>
                    </Stack>

                </FormProvider>
            </Container>
        </>
    );
};
export default AddSalesOrder;
