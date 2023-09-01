import { useMemo } from "react";
import { useParams as _useParams } from "react-router-dom";

const useParams = () => {
    const params = _useParams();

    return useMemo(() => params, [params]);
};

export default useParams;
