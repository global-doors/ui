import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
// @mui
import FormHelperText from "@mui/material/FormHelperText";
import Slider, { SliderProps } from "@mui/material/Slider";

type Props = SliderProps & {
    name: string;
    helperText?: ReactNode;
};

const RHFSlider = ({ name, helperText, ...other }: Props) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <>
                    <Slider {...field} valueLabelDisplay="auto" {...other} />

                    {(!!error || helperText) && (
                        <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
                    )}
                </>
            )}
        />
    );
};

export default RHFSlider;
