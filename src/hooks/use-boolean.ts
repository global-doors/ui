import {
    Dispatch, SetStateAction, useCallback, useState
} from "react";

interface ReturnType {
    value: boolean;
    onTrue: () => void;
    onFalse: () => void;
    onToggle: () => void;
    setValue: Dispatch<SetStateAction<boolean>>;
}

const useBoolean = (defaultValue?: boolean): ReturnType => {
    const [value, setValue] = useState(!!defaultValue);

    const onTrue = useCallback(() => {
        setValue(true);
    }, []);

    const onFalse = useCallback(() => {
        setValue(false);
    }, []);

    const onToggle = useCallback(() => {
        setValue(prev => !prev);
    }, []);

    return {
        value,
        onTrue,
        onFalse,
        onToggle,
        setValue
    };
};

export default useBoolean;
