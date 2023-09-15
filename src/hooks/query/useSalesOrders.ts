import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions";
import { fetchSalesOrders } from "src/services/api";
import { Paginated, PaginationModel, SalesOrder } from "src/types/api";

const useSalesOrders = (paginationModel: PaginationModel): UseQueryResult<Paginated<SalesOrder>> => (
    useQuery<Paginated<SalesOrder>, AxiosError>(
        ["sales-orders", paginationModel],
        () => fetchSalesOrders(paginationModel),
        useQueryOptions()
    ));

export default useSalesOrders;
