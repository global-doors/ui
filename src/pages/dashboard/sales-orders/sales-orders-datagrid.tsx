import { useNavigate } from "react-router-dom";
import { DataGrid, DataGridProps, GridColDef, GridEventListener } from "@mui/x-data-grid";
import paths from "src/routes/paths";
import { SalesOrder } from "src/types/api";

const getColumns = (): GridColDef[] => [
    {
        field: "OrderNumber",
        headerName: "Order No."
    },
    {
        field: "OrderDate",
        headerName: "Order Date"
    },
    // {
    //     field: "requiredDate",
    //     headerName: "Order Date"
    // },
    // {
    //     field: "customerCode",
    //     headerName: "Customer Code"
    // },
    // {
    //     field: "customerName",
    //     headerName: "Customer Name"
    // },
    // {
    //     field: "customerRef",
    //     headerName: "Customer Ref"
    // },
    // {
    //     field: "warehouse",
    //     headerName: "Warehouse"
    // },
    {
        field: "OrderStatus",
        headerName: "Status"
    },
    {
        field: "CurrencyCode",
        headerName: "Currency",
        valueGetter: params => params.row?.Currency?.CurrencyCode
    },
    {
        field: "cost",
        headerName: "Cost",
        valueGetter: () => "TODO"
    }
    // {
    //     field: "margin",
    //     headerName: "Margin"
    // },
    // {
    //     field: "subtotal",
    //     headerName: "Subtotal",
    //     disableColumnMenu: true
    // }
    // {
    //     field: "actions",
    //     width: 40,
    //     sortable: false,
    //     filterable: false,
    //     disableColumnMenu: true,
    //     renderHeader: () => null,
    //     renderCell: (params: GridCellParams) => (
    //         <IconButton>
    //             <Iconify icon="solar:menu-dots-square-line-duotone" />
    //         </IconButton>
    //     )
    // }
];

type SalesOrdersDatagridProps = Omit<DataGridProps, "columns" | "rows"> & {
    data: SalesOrder[];
    loading?: boolean;
};
const SalesOrdersDatagrid = ({
    data,
    loading = false,
    ...other
}: SalesOrdersDatagridProps) => {
    const navigate = useNavigate();
    const handleRowClick: GridEventListener<"rowClick"> = params => {
        const orderId = params.row.OrderNumber;
        const page = paths.dashboard.sales.order;
        navigate(page(orderId));
    };

    return (
        <DataGrid
            {...other}
            autoHeight
            columns={getColumns()}
            disableColumnMenu
            disableRowSelectionOnClick
            getRowId={row => row.OrderNumber}
            loading={loading}
            onRowClick={handleRowClick}
            paginationMode="server"
            rows={data}
            sx={{
                mx: -3,
                "& .MuiDataGrid-row": {
                    cursor: "pointer"
                }
            }}
        />
    );
};

export default SalesOrdersDatagrid;
