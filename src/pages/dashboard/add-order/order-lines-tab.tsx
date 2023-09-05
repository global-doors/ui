import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { CardContent, CardHeader } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Iconify } from "src/components/iconify";
import ChargesDatagrid from "src/pages/dashboard/add-order/charges-datagrid";
import LinesDatagrid from "src/pages/dashboard/add-order/lines-datagrid";
import NewChargeDialog from "src/pages/dashboard/add-order/new-charge-dialog";
import NewLineDialog from "src/pages/dashboard/add-order/new-line-dialog";
import { AddSalesOrderForm } from "src/types/forms";

type OrderLinesTabProps = {
    methods: UseFormReturn<AddSalesOrderForm>
};

const OrderLinesTab = ({ methods }: OrderLinesTabProps) => {
    const [linesOpen, setLinesOpen] = useState<boolean>(false);
    const toggleLinesOpen = () => setLinesOpen(!linesOpen);

    const [chargesOpen, setChargesOpen] = useState<boolean>(false);
    const toggleChargesOpen = () => setChargesOpen(!chargesOpen);

    return (
        <>
            <Stack
                divider={
                    <Divider
                        flexItem
                        sx={{ borderStyle: "dashed" }}
                    />
                }
            >

                <Stack
                    direction="row"
                    divider={
                        <Divider
                            flexItem
                            orientation="vertical"
                            sx={{ borderStyle: "dashed" }}
                        />
                    }
                    justifyContent="space-between"
                >
                    <Stack
                        divider={<Divider flexItem sx={{ borderStyle: "dashed" }} />}
                        flex={2}
                        spacing={1}
                    >
                        <Grid2 container>
                            <Grid2 sm={3} xs={12}>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Line Count
                                </Typography>
                                <Typography variant="subtitle1">
                                    0.00
                                </Typography>
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Item Count
                                </Typography>
                                <Typography variant="subtitle1">
                                    0.00
                                </Typography>
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Total Volume
                                </Typography>
                                <Typography variant="subtitle1">
                                    0.00
                                </Typography>
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Total Weight
                                </Typography>
                                <Typography variant="subtitle1">
                                    0.00
                                </Typography>
                            </Grid2>
                        </Grid2>
                        <Grid2 container>
                            <Grid2 sm={3} xs={12}>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Sell Price Tier
                                </Typography>
                                <Typography variant="subtitle1">
                                    0.00
                                </Typography>
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Payment Terms
                                </Typography>
                                <Typography variant="subtitle1">
                                    0.00
                                </Typography>
                            </Grid2>
                            <Grid2 sm={3} xs={12}>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Currency Code
                                </Typography>
                                <Typography variant="subtitle1">
                                    0.00
                                </Typography>
                            </Grid2>
                            <Grid2 sm={3} xs={12} />
                        </Grid2>
                    </Stack>
                    <Stack flex={1} textAlign="right">
                        <Box>
                            <Typography color="text.secondary" variant="subtitle2">
                                Subtotal
                            </Typography>
                            <Typography variant="subtitle1">
                                0.00
                            </Typography>
                        </Box>
                        <Box>
                            <Typography color="text.secondary" variant="subtitle2">
                                Charge Subtotal
                            </Typography>
                            <Typography variant="subtitle1">
                                0.00
                            </Typography>
                        </Box>
                        <Box>
                            <Typography color="text.secondary" variant="subtitle2">
                                Tax Total
                            </Typography>
                            <Typography variant="subtitle1">
                                0.00
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>

                <Stack alignItems="flex-end">
                    <Typography color="text.secondary" variant="subtitle2">
                        Total
                    </Typography>
                    <Typography variant="h4">
                        0.00
                    </Typography>
                </Stack>

            </Stack>

            {/* LINES  */}
            <CardHeader
                action={
                    <Button
                        onClick={toggleLinesOpen}
                        startIcon={<Iconify icon="solar:add-square-line-duotone" />}
                        variant="outlined"
                    >
                        Add
                    </Button>
                }
                sx={{ mx: -3, mt: 3 }}
                title="Lines"
            />
            <CardContent sx={{ mx: -6 }}>
                <LinesDatagrid data={methods.watch("lines")} />
            </CardContent>
            <NewLineDialog methods={methods} onClose={toggleLinesOpen} open={linesOpen} />

            {/* CHARGES */}
            <CardHeader
                action={
                    <Button
                        onClick={toggleChargesOpen}
                        startIcon={<Iconify icon="solar:add-square-line-duotone" />}
                        variant="outlined"
                    >
                        Add
                    </Button>
                }
                sx={{ mx: -3, mt: 3 }}
                title="Charges"
            />
            <CardContent sx={{ mx: -6 }}>
                <ChargesDatagrid data={methods.watch("charges")} />
            </CardContent>
            <NewChargeDialog methods={methods} onClose={toggleChargesOpen} open={chargesOpen} />

        </>
    );
};

export default OrderLinesTab;
