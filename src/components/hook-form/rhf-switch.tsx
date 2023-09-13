import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import FormControlLabel, { FormControlLabelProps } from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";

interface Props extends Omit<FormControlLabelProps, "control"> {
    name: string;
    helperText?: ReactNode;
}

const RHFSwitch = ({ name, helperText, ...other }: Props) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <div>
                    <FormControlLabel control={<Switch {...field} checked={field.value} />} {...other} />

                    {(!!error || helperText) && (
                        <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
                    )}
                </div>
            )}
        />
    );
};

export default RHFSwitch;
