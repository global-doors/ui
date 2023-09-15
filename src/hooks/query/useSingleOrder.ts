import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions";
import { fetchSingleOrder } from "src/services/api";
import { SalesOrder } from "src/types/api";

const useSingleOrder = (orderNumber?: string): UseQueryResult<SalesOrder> => (
    useQuery<SalesOrder, AxiosError>(
        ["orders"],
        () => fetchSingleOrder(orderNumber),
        useQueryOptions({ enabled: !!orderNumber })
    ));

export default useSingleOrder;
