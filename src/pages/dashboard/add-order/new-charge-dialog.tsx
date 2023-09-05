import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { DialogProps } from "@mui/material/Dialog";
import InputAdornment from "@mui/material/InputAdornment";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FormProvider, RHFTextField } from "src/components/hook-form";
import { AddChargeForm, AddSalesOrderForm } from "src/types/forms";

type NewChargeDialogProps = DialogProps & {
    methods: UseFormReturn<AddSalesOrderForm>;
};

const NewChargeDialog = ({ methods, ...other }: NewChargeDialogProps) => {
    const defaultValues = {
        charge: undefined,
        price: undefined,
        salesAccount: undefined,
        taxRate: undefined,
        discount: undefined
    };
    const chargeMethods = useForm<AddChargeForm>({
        defaultValues,
        mode: "onChange"
    });
    const { append } = useFieldArray({
        control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
        name: "charges" // unique name for your Field Array
    });

    const onSave = () => {
        append(chargeMethods.getValues());
        if (other.onClose) other.onClose({}, "escapeKeyDown");
    };

    return (
        <Dialog {...other}>
            <DialogTitle>Add New Charge</DialogTitle>
            <DialogContent>
                <FormProvider methods={chargeMethods}>
                    <Grid2 container spacing={2}>
                        <Grid2 sm={4} xs={12}>
                            <RHFTextField label="Charge" name="charge" />
                        </Grid2>
                        <Grid2 sm={4} xs={12}>
                            <RHFTextField label="Sales Account" name="salesAccount" />
                        </Grid2>
                        <Grid2 sm={4} xs={0} />
                        <Grid2 sm={4} xs={12}>
                            <RHFTextField label="Price" name="price" />
                        </Grid2>
                        <Grid2 xs={4}>
                            <RHFTextField label="Tax Rate" name="taxRate" />
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

export default NewChargeDialog;
