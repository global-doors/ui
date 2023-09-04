import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SxProps, Theme } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type RHFSelectProps = TextFieldProps & {
    name: string;
    native?: boolean;
    maxHeight?: boolean | number;
    children: ReactNode;
    PaperPropsSx?: SxProps<Theme>;
};

const RHFSelect = ({
    name,
    native,
    maxHeight = 220,
    helperText,
    children,
    PaperPropsSx,
    ...other
}: RHFSelectProps) => {
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
                    select
                    SelectProps={{
                        native,
                        MenuProps: {
                            PaperProps: {
                                sx: {
                                    ...(!native && {
                                        maxHeight: typeof maxHeight === "number" ? maxHeight : "unset"
                                    }),
                                    ...PaperPropsSx
                                }
                            }
                        },
                        sx: { textTransform: "capitalize" }
                    }}
                    {...other}
                >
                    {children}
                </TextField>
            )}
        />
    );
};

export default RHFSelect;
