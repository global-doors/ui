import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { DialogProps } from "@mui/material/Dialog";
import InputAdornment from "@mui/material/InputAdornment";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FormProvider, RHFTextField } from "src/components/hook-form";
import { Iconify } from "src/components/iconify";
import { AddLineForm, AddSalesOrderForm } from "src/types/forms";

type NewLineDialogProps = DialogProps & {
    methods: UseFormReturn<AddSalesOrderForm>;
};

const NewLineDialog = ({ methods, ...other }: NewLineDialogProps) => {
    const defaultValues = {
        line: undefined,
        image: undefined,
        productCode: undefined,
        productDescription: undefined,
        quantity: undefined,
        shipped: undefined,
        invoiced: undefined,
        unitPrice: undefined,
        unit: undefined,
        discount: undefined,
        discountPrice: undefined,
        subtotal: undefined,
        taxRate: undefined,
        lineTotal: undefined,
        margin: undefined
    };
    const lineMethods = useForm<AddLineForm>({
        defaultValues,
        mode: "onChange"
    });
    const { append } = useFieldArray({
        control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
        name: "lines" // unique name for your Field Array
    });

    const onSave = () => {
        append(lineMethods.getValues());
        if (other.onClose) other.onClose({}, "escapeKeyDown");
    };

    return (
        <Dialog {...other}>
            <DialogTitle>Add New Line</DialogTitle>
            <DialogContent>
                <FormProvider methods={lineMethods}>
                    <Grid2 container spacing={2}>
                        <Grid2 mt={1} sm={12} xs={12}>
                            <RHFTextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Iconify icon="solar:magnifer-line-duotone" />
                                        </InputAdornment>
                                    )
                                }}
                                label="Product"
                                name="product"
                            />
                        </Grid2>
                        <Grid2 sm={4} xs={12}>
                            <RHFTextField label="Quantity" name="quantity" />
                        </Grid2>
                        <Grid2 sm={4} xs={12}>
                            <RHFTextField label="Price" name="price" />
                        </Grid2>
                        <Grid2 sm={4} xs={12}>
                            <RHFTextField
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            %
                                        </InputAdornment>
                                    )
                                }}
                                label="Discount"
                                name="discount"
                            />
                        </Grid2>
                        <Grid2 sm={4} xs={12}>
                            <RHFTextField label="Availability" name="availability" />
                        </Grid2>
                        <Grid2 sm={4} xs={12}>
                            <RHFTextField label="Pack Size" name="packSize" />
                        </Grid2>
                        <Grid2 sm={4} xs={12}>
                            <RHFTextField label="Subtotal" name="subtotal" />
                        </Grid2>
                        <Grid2 xs={12}>
                            <RHFTextField label="Comments" multiline name="comments" rows={2} />
                        </Grid2>
                    </Grid2>
                </FormProvider>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => other?.onClose ?? null}>
                    Cancel
                </Button>
                <Button color="primary" onClick={onSave} variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NewLineDialog;
