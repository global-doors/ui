import { Chip, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack, { StackProps } from "@mui/material/Stack";
import { Iconify } from "src/components/iconify";
import { SalesOrderFilterForm } from "src/types/forms";

type BlockProps = StackProps & {
    label: string;
};

const Block = ({ label, children, sx, ...other }: BlockProps) => (
    <Stack
        component={Paper}
        direction="row"
        spacing={1}
        sx={{
            p: 1,
            borderRadius: 1,
            overflow: "hidden",
            borderStyle: "dashed",
            ...sx
        }}
        variant="outlined"
        {...other}
    >
        <Box component="span" sx={{ typography: "subtitle2" }}>
            {label}
        </Box>

        <Stack direction="row" flexWrap="wrap" spacing={1}>
            {children}
        </Stack>
    </Stack>
);

type SalesOrdersFilterResultProps = StackProps & {
    filters: SalesOrderFilterForm;
    onFilters: (name: string, value: string | string[]) => void;
    onResetFilters: VoidFunction;
    results: number;
};
const SalesOrdersFilterResult = ({
    filters,
    onFilters,
    onResetFilters,
    results,
    ...other
}: SalesOrdersFilterResultProps) => {
    const handleRemoveStatus = (inputValue: string) => {
        const newValue = filters.orderStatus.filter(item => item !== inputValue);
        onFilters("orderStatus", newValue);
    };
    const handleRemoveWarehouse = (inputValue: string) => {
        const newValue = filters.warehouse.filter(item => item !== inputValue);
        onFilters("warehouse", newValue);
    };
    const handleRemoveDeliveryMethod = (inputValue: string) => {
        const newValue = filters.deliveryMethod.filter(item => item !== inputValue);
        onFilters("deliveryMethod", newValue);
    };

    const showResults = !!filters.orderStatus.length &&
        !!filters.deliveryMethod.length &&
        !!filters.warehouse.length;
    return (
        <Stack alignItems="flex-end" direction="row" spacing={1} {...other}>
            <Stack alignItems="center" direction="row" flexGrow={1} flexWrap="wrap" spacing={1}>
                {!!filters.orderStatus.length && (
                    <Block label="Status:">
                        {filters.orderStatus.map(item => (
                            <Chip key={item} label={item} onDelete={() => handleRemoveStatus(item)} size="small" />
                        ))}
                    </Block>
                )}

                {!!filters.warehouse.length && (
                    <Block label="Warehouse:">
                        {filters.warehouse.map(item => (
                            <Chip
                                key={item}
                                label={item}
                                onDelete={() => handleRemoveWarehouse(item)}
                                size="small"
                            />
                        ))}
                    </Block>
                )}

                {!!filters.deliveryMethod.length && (
                    <Block label="Delivery Method:">
                        {filters.deliveryMethod.map(item => (
                            <Chip
                                key={item}
                                label={item}
                                onDelete={() => handleRemoveDeliveryMethod(item)}
                                size="small"
                            />
                        ))}
                    </Block>
                )}

                {
                    showResults &&
                    <Button
                        color="error"
                        onClick={onResetFilters}
                        startIcon={<Iconify icon="solar:trash-bin-minimalistic-line-duotone" />}
                    >
                        Clear
                    </Button>
                }

            </Stack>

            <Box sx={{ typography: "body2" }}>
                <strong>{results}</strong>
                <Box component="span" sx={{ color: "text.secondary", ml: 0.25 }}>
                    results found
                </Box>
            </Box>
        </Stack>
    );
};

export default SalesOrdersFilterResult;
