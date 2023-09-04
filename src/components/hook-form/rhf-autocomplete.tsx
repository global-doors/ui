import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface Props<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
    name: string;
    label?: string;
    placeholder?: string;
    helperText?: ReactNode;
}

const RHFAutocomplete = <
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
>({
    name,
    label,
    placeholder,
    helperText,
    ...other
}: Omit<Props<T, Multiple, DisableClearable, FreeSolo>, "renderInput">) => {
    const { control, setValue } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Autocomplete
                    {...field}
                    onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
                    renderInput={params => (
                        <TextField
                            error={!!error}
                            helperText={error ? error?.message : helperText}
                            label={label}
                            placeholder={placeholder}
                            {...params}
                        />
                    )}
                    {...other}
                />
            )}
        />
    );
};

export default RHFAutocomplete;
