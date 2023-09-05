import { useEffect, useState } from "react";

const useLocalStorage = <ValueType>(key: string, defaultValue: ValueType) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue === null || storedValue === undefined ? defaultValue ?? null : JSON.parse(`${storedValue}`);
    });

    useEffect(() => {
        const listener = (e: StorageEvent) => {
            if (e.storageArea === localStorage && e.key === key) {
                setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
            }
        };
        window.addEventListener("storage", listener);

        return () => {
            window.removeEventListener("storage", listener);
        };
    }, [key, defaultValue]);

    const setLocalStorageValue = (newValue: ValueType) => {
        const result = typeof newValue === "function" ? newValue(value) : newValue;
        if (result) {
            localStorage.setItem(key, JSON.stringify(result));
        } else {
            localStorage.removeItem(key);
        }
        setValue(result);
    };

    return [value, setLocalStorageValue];
};

export default useLocalStorage;
