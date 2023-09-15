import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, CardHeader, Container, IconButton, Stack } from "@mui/material";
import { Iconify } from "src/components/iconify";
import { PageHeader } from "src/components/page-header";
import useSalesOrders from "src/hooks/query/useSalesOrders";
import SalesOrdersDatagrid from "src/pages/dashboard/sales-orders/sales-orders-datagrid";
import SalesOrdersFilters from "src/pages/dashboard/sales-orders/sales-orders-filters";
import paths from "src/routes/paths";
import { SalesOrderFilterForm } from "src/types/forms";

const SalesOrders = () => {
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

    const [showFilters, setShowFilters] = useState<boolean>(true);
    const toggleFilters = () => setShowFilters(!showFilters);

    const navigate = useNavigate();

    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 5
    });

    const {
        data,
        isLoading
    } = useSalesOrders({
        page: paginationModel.page + 1,
        pageSize: paginationModel.pageSize
    });
    const orders = data?.Items;
    const pagination = data?.Pagination;

    const watchForm = methods.watch();
    const filteredData = useMemo(
        () => {
            let filtered = (orders ?? []).slice();
            if (watchForm.orderStatus.length) {
                filtered = filtered.filter(item => watchForm.orderStatus.includes(item.OrderStatus));
            }
            // if (watchForm.warehouse.length) {
            //     filtered = filtered.filter(item => watchForm.warehouse.includes(item.warehouse));
            // }
            // if (watchForm.deliveryMethod.length) {
            //     filtered = filtered.filter(item => watchForm.deliveryMethod.includes(item.deliveryMethod));
            // }
            // if (watchForm.printed.length) {
            //     filtered = filtered.filter(item => watchForm.printed.includes(item.printed));
            // }

            return filtered;
        },
        [orders, watchForm.orderStatus]
    );

    // Some API clients return undefined while loading
    // Following lines are here to prevent `rowCountState` from being undefined during the loading
    const [rowCountState, setRowCountState] = useState(
        pagination?.PageSize || 0
    );
    useEffect(() => {
        setRowCountState(prevRowCountState => (
            pagination?.NumberOfItems !== undefined
                ? pagination?.NumberOfItems
                : prevRowCountState
        ));
    }, [pagination?.NumberOfItems, setRowCountState]);

    return (

        <>
            <Helmet>
                <title> View Sales Orders</title>
            </Helmet>

            <Container maxWidth="xl">
                <PageHeader
                    action={
                        <Stack direction="row" spacing={1}>
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
                        {
                            name: "Sales",
                            href: paths.dashboard.root
                        },
                        { name: "View Sales Orders" }
                    ]}
                    sx={{
                        mb: {
                            xs: 3,
                            md: 5
                        }
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
                        <SalesOrdersDatagrid
                            data={filteredData}
                            loading={isLoading}
                            onPaginationModelChange={setPaginationModel}
                            paginationMode="server"
                            paginationModel={paginationModel}
                            rowCount={rowCountState}
                        />
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default SalesOrders;
