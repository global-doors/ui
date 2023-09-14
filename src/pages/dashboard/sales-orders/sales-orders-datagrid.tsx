import IconButton from "@mui/material/IconButton";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Iconify } from "src/components/iconify";

const getColumns = (): GridColDef[] => [
    {
        field: "orderNumber",
        headerName: "Order No."
    },
    {
        field: "orderDate",
        headerName: "Order Date"
    },
    {
        field: "requiredDate",
        headerName: "Order Date"
    },
    {
        field: "customerCode",
        headerName: "Customer Code"
    },
    {
        field: "customerName",
        headerName: "Customer Name"
    },
    {
        field: "customerRef",
        headerName: "Customer Ref"
    },
    {
        field: "warehouse",
        headerName: "Warehouse"
    },
    {
        field: "orderStatus",
        headerName: "Status"
    },
    {
        field: "currency",
        headerName: "Currency"
    },
    {
        field: "cost",
        headerName: "Cost"
    },
    {
        field: "margin",
        headerName: "Margin"
    },
    {
        field: "subtotal",
        headerName: "Subtotal",
        disableColumnMenu: true
    }
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

type SalesOrdersDatagridProps = {
    data: any;
};
const SalesOrdersDatagrid = ({ data }: SalesOrdersDatagridProps) => (
    <DataGrid
        autoHeight
        columns={getColumns()}
        disableColumnMenu
        disableRowSelectionOnClick
        getRowId={row => row.orderNumber}
        rows={data}
        sx={{ mx: -3 }}
    />
);

export default SalesOrdersDatagrid;
