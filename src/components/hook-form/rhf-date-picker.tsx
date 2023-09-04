import { Controller, useFormContext } from "react-hook-form";
import { SxProps, TextFieldProps } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { Iconify } from "src/components/iconify";

interface RHFDatePickerProps extends Partial<DatePickerProps<any>> {
    ITextFieldProps?: Partial<TextFieldProps>;
    label: string;
    minDate?: Date;
    maxDate?: Date;
    name: string;
    sx?: SxProps;
}

/**
 * Component DatePicker using React Hook Form's context.
 * Must be a child of FormProvider
 * @see {@link https://react-hook-form.com/api/useformcontext}
 */
const RHFDatePicker = ({ ITextFieldProps, label, minDate, maxDate, name, sx, ...other }: RHFDatePickerProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <DatePicker
                    {...field}
                    format="DD/MM/YYYY"
                    label={label}
                    slotProps={{
                        openPickerIcon: <Iconify icon="solar:calendar-mark-line-duotone" />,
                        textField: {
                            fullWidth: true,
                            error: !!error,
                            helperText: error?.message,
                            size: "small"
                        }
                    }}
                    {...other}
                />
            )}
        />
    );
};

export default RHFDatePicker;
