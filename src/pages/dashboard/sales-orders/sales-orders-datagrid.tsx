import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import paths from "src/routes/paths";

const getColumns = (): GridColDef[] => [
    {
        field: "orderNumber",
        headerName: "Order No."
    },
    {
        field: "orderDate",
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

type SalesOrdersDatagridProps = {
    data: any;
};
const SalesOrdersDatagrid = ({ data }: SalesOrdersDatagridProps) => {
    const navigate = useNavigate();
    const handleRowClick: GridEventListener<"rowClick"> = params => {
        const orderId = params.row.orderNumber;
        const page = paths.dashboard.sales.order;
        navigate(page(orderId));
    };

    return (
        <DataGrid
            autoHeight
            columns={getColumns()}
            disableColumnMenu
            disableRowSelectionOnClick
            getRowId={row => row.orderNumber}
            onRowClick={handleRowClick}
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
