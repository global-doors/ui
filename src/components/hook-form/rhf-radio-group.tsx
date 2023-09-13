import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";

type Props = RadioGroupProps & {
    name: string;
    options: { label: string; value: any }[];
    label?: string;
    spacing?: number;
    helperText?: ReactNode;
};

const RHFRadioGroup = ({
    row,
    name,
    label,
    options,
    spacing,
    helperText,
    ...other
}: Props) => {
    const { control } = useFormContext();

    const labelledby = label ? `${name}-${label}` : "";

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <FormControl component="fieldset">
                    {label && (
                        <FormLabel component="legend" id={labelledby} sx={{ typography: "body2" }}>
                            {label}
                        </FormLabel>
                    )}

                    <RadioGroup {...field} aria-labelledby={labelledby} row={row} {...other}>
                        {options.map(option => (
                            <FormControlLabel
                                key={option.value}
                                control={<Radio />}
                                label={option.label}
                                sx={{
                                    "&:not(:last-of-type)": {
                                        mb: spacing || 0
                                    },
                                    ...(row && {
                                        mr: 0,
                                        "&:not(:last-of-type)": {
                                            mr: spacing || 2
                                        }
                                    })
                                }}
                                value={option.value}
                            />
                        ))}
                    </RadioGroup>

                    {(!!error || helperText) && (
                        <FormHelperText error={!!error} sx={{ mx: 0 }}>
                            {error ? error?.message : helperText}
                        </FormHelperText>
                    )}
                </FormControl>
            )}
        />
    );
};

export default RHFRadioGroup;
