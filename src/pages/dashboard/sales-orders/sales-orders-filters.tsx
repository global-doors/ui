import { UseFormReturn } from "react-hook-form";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { FormProvider, RHFMultiSelect, RHFTextField } from "src/components/hook-form";
import RhDatePicker from "src/components/hook-form/rhf-date-picker";
import { Iconify } from "src/components/iconify";
import SalesOrdersFilterResult from "src/pages/dashboard/sales-orders/sales-orders-filter-result";
import { SalesOrderFilterForm } from "src/types/forms";

const OrderStatusOptions = [
    {
        label: "Placed",
        value: "placed"
    },
    {
        label: "Pending",
        value: "pending"
    }
];
const WarehouseOptions = [
    {
        label: "Warehouse 1",
        value: "warehouse1"
    }
];
const DeliveryMethodOptions = [
    {
        label: "Royal Mail",
        value: "royalMail"
    }
];
const PrintedOptions = [
    {
        label: "Yes",
        value: "yes"
    },
    {
        label: "No",
        value: "no"
    }
];

type SalesOrdersFiltersProps = {
    methods: UseFormReturn<SalesOrderFilterForm>;
    resultsCount: number;
    showFilters: boolean
};
const SalesOrdersFilters = ({ methods, resultsCount, showFilters }: SalesOrdersFiltersProps) => {
    const handleFilters = (name: string, value: string | string[]) => {
        methods.reset(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleResetFilters = () => methods.reset();

    return (
        <FormProvider methods={methods}>
            <Collapse in={showFilters}>
                <Stack spacing={2}>
                    <Box
                        columnGap={2}
                        display="grid"
                        gridTemplateColumns={{
                            xs: "repeat(1, 1fr)",
                            md: "repeat(5, 1fr)"
                        }}
                        rowGap={3}
                    >
                        <RHFMultiSelect
                            checkbox
                            fullWidth
                            label="Status"
                            name="orderStatus"
                            options={OrderStatusOptions}
                            size="small"
                        />
                        <RHFTextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Iconify icon="solar:magnifer-line-duotone" />
                                    </InputAdornment>
                                )
                            }}
                            label="Customer Name"
                            name="customerName"
                        />
                        <RHFTextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Iconify icon="solar:magnifer-line-duotone" />
                                    </InputAdornment>
                                )
                            }}
                            label="Order Number"
                            name="orderNumber"
                        />
                        <RHFMultiSelect
                            checkbox
                            fullWidth
                            label="Warehouse"
                            name="warehouse"
                            options={WarehouseOptions}
                        />
                    </Box>
                    <Box
                        columnGap={2}
                        display="grid"
                        gridTemplateColumns={{
                            xs: "repeat(1, 1fr)",
                            md: "repeat(5, 1fr)"
                        }}
                        rowGap={3}
                    >
                        <RHFTextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Iconify icon="solar:magnifer-line-duotone" />
                                    </InputAdornment>
                                )
                            }}
                            label="Customer Reference"
                            name="customerRef"
                        />
                        <RHFMultiSelect
                            checkbox
                            label="Delivery Method"
                            name="deliveryMethod"
                            options={DeliveryMethodOptions}
                        />
                        <RHFMultiSelect
                            label="Printed"
                            name="printed"
                            options={PrintedOptions}
                        />
                        <RhDatePicker label="Date From" name="dateFrom" />
                        <RhDatePicker label="Date To" name="dateTo" />
                    </Box>
                </Stack>
            </Collapse>

            <Box sx={{ py: 1 }}>
                <SalesOrdersFilterResult
                    filters={methods.watch()}
                    onFilters={handleFilters}
                    onResetFilters={handleResetFilters}
                    results={resultsCount}
                />
            </Box>

        </FormProvider>
    );
};

export default SalesOrdersFilters;
