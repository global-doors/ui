import { DataGrid, GridColDef } from "@mui/x-data-grid";
import hash from "object-hash";

const TEST_DATA = [
    {
        charge: "",
        price: "",
        salesAccount: "",
        taxRate: "",
        invoiced: ""
    }
];

const getColumns = (): GridColDef[] => [
    {
        field: "charge",
        headerName: "Charge"
    },
    {
        field: "price",
        headerName: "Price"
    },
    {
        field: "salesAccount",
        headerName: "Sales Account"
    },
    {
        field: "taxRate",
        headerName: "Tax Rate"
    },
    {
        field: "invoiced",
        headerName: "Invoiced"
    }
];

type ChargesDatagridProps = {
    data?: any; // TODO
};
const ChargesDatagrid = ({ data = TEST_DATA }: ChargesDatagridProps) => (
    <DataGrid
        autoHeight
        columns={getColumns()}
        disableColumnMenu
        disableRowSelectionOnClick
        getRowId={row => hash(row) as string}
        rows={data}
    />
);

export default ChargesDatagrid;
