import { Controller, useFormContext } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type Props = TextFieldProps & {
    name: string;
};

const RHFTextField = ({ name, helperText, type, ...other }: Props) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    error={!!error}
                    fullWidth
                    helperText={error ? error?.message : helperText}
                    onChange={event => {
                        if (type === "number") {
                            field.onChange(Number(event.target.value));
                        } else {
                            field.onChange(event.target.value);
                        }
                    }}
                    size="small"
                    type={type}
                    value={type === "number" && field.value === 0 ? "" : field.value}
                    {...other}
                />
            )}
        />
    );
};

export default RHFTextField;
