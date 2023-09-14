import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, CardHeader, Container, IconButton, Stack } from "@mui/material";
import { Iconify } from "src/components/iconify";
import { PageHeader } from "src/components/page-header";
import SalesOrdersDatagrid from "src/pages/dashboard/sales-orders/sales-orders-datagrid";
import SalesOrdersFilters from "src/pages/dashboard/sales-orders/sales-orders-filters";
import paths from "src/routes/paths";
import { SalesOrderFilterForm } from "src/types/forms";

const TEST_DATA = [
    {
        orderNumber: "1234",
        orderDate: new Date(),
        requiredDate: new Date(),
        customerCode: "CMS001",
        customerName: "Customer 1",
        customerRef: "REF1234567",
        warehouse: "Warehouse",
        orderStatus: "placed",
        currency: "GBP",
        cost: 1234,
        margin: "5%",
        subtotal: "5.99",
        deliveryMethod: "royalMail",
        printed: "yes"
    }
];

const Index = () => {
    const defaultValues = {
        orderStatus: [],
        customerName: "",
        orderNumber: "",
        customerRef: "",
        warehouse: [],
        deliveryMethod: [],
        printed: [],
        dateFrom: undefined,
        dateTo: undefined
    };
    const methods = useForm<SalesOrderFilterForm>({
        defaultValues,
        mode: "onChange"
    });

    const watchForm = methods.watch();
    const filteredData = useMemo(
        () => {
            let filtered = TEST_DATA.slice();
            if (watchForm.orderStatus.length) {
                filtered = filtered.filter(item => watchForm.orderStatus.includes(item.orderStatus));
            }
            if (watchForm.warehouse.length) {
                filtered = filtered.filter(item => watchForm.warehouse.includes(item.warehouse));
            }
            if (watchForm.deliveryMethod.length) {
                filtered = filtered.filter(item => watchForm.deliveryMethod.includes(item.deliveryMethod));
            }
            if (watchForm.printed.length) {
                filtered = filtered.filter(item => watchForm.printed.includes(item.printed));
            }

            return filtered;
        },
        [watchForm]
    );

    const [showFilters, setShowFilters] = useState<boolean>(true);
    const toggleFilters = () => setShowFilters(!showFilters);

    const navigate = useNavigate();
    return (

        <>
            <Helmet>
                <title> View Sales Orders</title>
            </Helmet>

            <Container maxWidth="xl">
                <PageHeader
                    action={
                        <Stack direction="row" spacing={1}>
                            <Button startIcon={<Iconify icon="solar:import-line-duotone" />} variant="outlined">
                                Import
                            </Button>
                            <Button startIcon={<Iconify icon="solar:export-line-duotone" />} variant="outlined">
                                Export
                            </Button>
                            <Button
                                onClick={() => navigate("/dashboard/sales/add-order")}
                                startIcon={<Iconify icon="solar:add-square-line-duotone" />}
                                variant="contained"
                            >
                                Add Sales Order
                            </Button>
                        </Stack>
                    }
                    heading="View Sales Orders"
                    links={[
                        { name: "Sales", href: paths.dashboard.root },
                        { name: "View Sales Orders" }
                    ]}
                    sx={{
                        mb: { xs: 3, md: 5 }
                    }}
                />

                <Card>
                    <CardHeader
                        action={
                            <IconButton onClick={toggleFilters}>
                                <Iconify
                                    icon={showFilters ? "solar:filter-bold-duotone" : "solar:filter-line-duotone"}
                                />
                            </IconButton>
                        }
                    />
                    <CardContent sx={{ pt: 0 }}>
                        <SalesOrdersFilters
                            methods={methods}
                            resultsCount={filteredData.length}
                            showFilters={showFilters}
                        />
                        <SalesOrdersDatagrid data={filteredData} />
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default Index;
