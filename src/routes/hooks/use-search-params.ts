import { useMemo } from "react";
import { useSearchParams as _useSearchParams } from "react-router-dom";

const useSearchParams = () => {
    const [searchParams] = _useSearchParams();
    return useMemo(() => searchParams, [searchParams]);
};

export default useSearchParams;
