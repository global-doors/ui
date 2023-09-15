import { buttonClasses } from "@mui/material/Button";
import { listClasses } from "@mui/material/List";
import { listItemIconClasses } from "@mui/material/ListItemIcon";
import { paperClasses } from "@mui/material/Paper";
import { alpha, Theme } from "@mui/material/styles";
import { tablePaginationClasses } from "@mui/material/TablePagination";

import { paper } from "../../css";

const dataGrid = (theme: Theme) => {
    const paperStyles = paper({ theme, dropdown: true });

    return {
        MuiDataGrid: {
            defaultProps: {
                density: "compact",
                rowsPerPageOptions: [5, 25, 50]
            },
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    borderWidth: 0,
                    [`& .${tablePaginationClasses.root}`]: {
                        borderTop: 0
                    },
                    [`& .${tablePaginationClasses.toolbar}`]: {
                        height: "auto"
                    },
                    "& .MuiDataGrid-columnHeaderTitle": {
                        fontSize: "0.75rem"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        borderColor: theme.palette.divider,
                        outline: "none"
                    },
                    // eslint-disable-next-line max-len
                    "& .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-columnHeader:focus .MuiDataGrid-cell:focus-within, .MuiDataGrid-cell:focus":
                        {
                            outline: "none"
                        }
                },
                cell: {
                    borderBottom: `1px dashed ${theme.palette.divider}`
                },
                selectedRowCount: {
                    whiteSpace: "nowrap"
                },
                columnSeparator: {
                    color: theme.palette.divider
                },
                toolbarContainer: {
                    padding: theme.spacing(2),
                    borderBottom: `1px dashed ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.neutral
                },
                paper: {
                    ...paperStyles,
                    padding: 0
                },
                menu: {
                    [`& .${paperClasses.root}`]: {
                        ...paperStyles
                    },
                    [`& .${listClasses.root}`]: {
                        padding: 0,
                        [`& .${listItemIconClasses.root}`]: {
                            minWidth: 0,
                            marginRight: theme.spacing(2)
                        }
                    }
                },
                columnHeaders: {
                    borderRadius: 0,
                    backgroundColor: theme.palette.background.neutral,
                    paddingTop: theme.spacing(2),
                    paddingBottom: theme.spacing(2)
                },
                columnHeaderTitle: {
                    color: theme.palette.text.secondary,
                    fontWeight: theme.typography.fontWeightBold,
                    paddingY: 10
                },
                panelHeader: {
                    padding: theme.spacing(2)
                },
                panelFooter: {
                    padding: theme.spacing(2),
                    justifyContent: "flex-end",
                    borderTop: `dashed 1px ${theme.palette.divider}`,
                    [`& .${buttonClasses.root}`]: {
                        "&:first-of-type": {
                            border: `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`
                        },
                        "&:last-of-type": {
                            marginLeft: theme.spacing(1.5),
                            color: theme.palette.background.paper,
                            backgroundColor: theme.palette.text.primary
                        }
                    }
                },
                filterForm: {
                    padding: theme.spacing(2)
                },
                filterFormValueInput: {
                    marginLeft: theme.spacing(2)
                },
                filterFormColumnInput: {
                    marginLeft: theme.spacing(2)
                },
                filterFormOperatorInput: {
                    marginLeft: theme.spacing(2)
                }
            }
        }
    };
};

export default dataGrid;
