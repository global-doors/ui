import {
    ReactNode, useCallback, useMemo, useState
} from "react";
import isEqual from "lodash/isEqual";
import { useLocalStorage } from "src/hooks/use-local-storage";

import { SettingsValueProps } from "../types";

import { SettingsContext } from "./settings-context";

const STORAGE_KEY = "settings";

type SettingsProviderProps = {
    children: ReactNode;
    defaultSettings: SettingsValueProps;
};

const SettingsProvider = ({ children, defaultSettings }: SettingsProviderProps) => {
    const { state, update, reset } = useLocalStorage(STORAGE_KEY, defaultSettings);

    const [openDrawer, setOpenDrawer] = useState(false);

    // Drawer
    const onToggleDrawer = useCallback(() => {
        setOpenDrawer(prev => !prev);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    const canReset = !isEqual(state, defaultSettings);

    const memoizedValue = useMemo(
        () => ({
            ...state,
            onUpdate: update,
            // Reset
            canReset,
            onReset: reset,
            // Drawer
            open: openDrawer,
            onToggle: onToggleDrawer,
            onClose: onCloseDrawer
        }),
        [
            reset,
            update,
            state,
            canReset,
            openDrawer,
            onCloseDrawer,
            onToggleDrawer
        ]
    );

    return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
};

export default SettingsProvider;
