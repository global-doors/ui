import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Chip, InputLabel, OutlinedInput, Select, SelectProps } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";

type RHFMultiSelectProps = SelectProps & {
    name: string;
    label?: string;
    chip?: boolean;
    checkbox?: boolean;
    placeholder?: string;
    helperText?: ReactNode;
    options: {
        label: string;
        value: string;
    }[];
};

const RHFMultiSelect = ({
    name,
    chip,
    label,
    options,
    checkbox,
    placeholder,
    helperText,
    sx,
    ...other
}: RHFMultiSelectProps) => {
    const { control } = useFormContext();

    const renderValues = (selectedIds: string[]) => {
        const selectedItems = options.filter(item => selectedIds.includes(item.value));

        if (!selectedItems.length && placeholder) {
            return (
                <Box component="em" sx={{ color: "text.disabled" }}>
                    {placeholder}
                </Box>
            );
        }

        if (chip) {
            return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selectedItems.map(item => (
                        <Chip key={item.value} label={item.label} size="small" />
                    ))}
                </Box>
            );
        }

        return selectedItems.map(item => item.label)
            .join(", ");
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <FormControl size="small" sx={sx}>
                    {
                        label &&
                        <InputLabel id={name}>
                            {" "}
                            {label}
                            {" "}
                        </InputLabel>
                    }

                    <Select
                        {...field}
                        displayEmpty={!!placeholder}
                        input={<OutlinedInput error={!!error} fullWidth label={label} size="small" />}
                        labelId={name}
                        multiple
                        renderValue={renderValues}
                        size="small"
                        {...other}
                    >
                        {placeholder && (
                            <MenuItem disabled value="">
                                <em>
                                    {" "}
                                    {placeholder}
                                    {" "}
                                </em>
                            </MenuItem>
                        )}

                        {options.map(option => {
                            const selected = field.value.includes(option.value);

                            return (
                                <MenuItem key={option.value} value={option.value}>
                                    {checkbox && <Checkbox checked={selected} disableRipple size="small" />}

                                    {option.label}
                                </MenuItem>
                            );
                        })}
                    </Select>

                    {(!!error || helperText) && (
                        <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
                    )}
                </FormControl>
            )}
        />
    );
};

export default RHFMultiSelect;
