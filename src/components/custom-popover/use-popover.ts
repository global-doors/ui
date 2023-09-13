import { Dispatch, MouseEvent, SetStateAction, useCallback, useState } from "react";

type ReturnType = {
    onClose: VoidFunction;
    open: HTMLElement | null;
    onOpen: (event: MouseEvent<HTMLElement>) => void;
    setOpen: Dispatch<SetStateAction<HTMLElement | null>>;
};

export default function usePopover(): ReturnType {
    const [open, setOpen] = useState<HTMLElement | null>(null);

    const onOpen = useCallback((event: MouseEvent<HTMLElement>) => {
        setOpen(event.currentTarget);
    }, []);

    const onClose = useCallback(() => {
        setOpen(null);
    }, []);

    return {
        open,
        onOpen,
        onClose,
        setOpen
    };
}
