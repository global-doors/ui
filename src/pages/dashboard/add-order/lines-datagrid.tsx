import { DataGrid, GridColDef } from "@mui/x-data-grid";
import hash from "object-hash";

const TEST_DATA = [
    {
        line: "",
        image: "",
        productCode: "",
        productDescription: "",
        quantity: "",
        shipped: false,
        invoiced: false,
        unitPrice: "1.00",
        unit: 10,
        discount: "5%",
        discountPrice: "1.00",
        subtotal: "",
        taxRate: "",
        lineTotal: "",
        margin: ""
    }
];

const getColumns = (): GridColDef[] => [
    {
        field: "line",
        headerName: "Ln"
    },
    {
        field: "image",
        headerName: "Image"
    },
    {
        field: "productCode",
        headerName: "Product Code"
    },
    {
        field: "productDescription",
        headerName: "Product Description"
    },
    {
        field: "quantity",
        headerName: "Quantity"
    },
    {
        field: "shipped",
        headerName: "Shipped"
    },
    {
        field: "invoiced",
        headerName: "Invoiced"
    },
    {
        field: "unitPrice",
        headerName: "Unit Price"
    },
    {
        field: "unit",
        headerName: "Unit"
    },
    {
        field: "discount",
        headerName: "Discount"
    },
    {
        field: "discountPrice",
        headerName: "Discount Price"
    },
    {
        field: "subtotal",
        headerName: "Subtotal"
    },
    {
        field: "taxRate",
        headerName: "Tax Rate"
    },
    {
        field: "lineTotal",
        headerName: "Line Total"
    },
    {
        field: "margin",
        headerName: "Margin"
    }
];

type LinesDatagridProps = {
    data?: any; // TODO
};
const LinesDatagrid = ({ data = TEST_DATA }: LinesDatagridProps) => (
    <DataGrid
        autoHeight
        columns={getColumns()}
        disableColumnMenu
        disableRowSelectionOnClick
        getRowId={row => hash(row) as string}
        rows={data}
    />
);

export default LinesDatagrid;
