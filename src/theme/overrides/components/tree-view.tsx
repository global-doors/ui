import { Theme } from "@mui/material/styles";

const treeView = (theme: Theme) => ({
    MuiTreeItem: {
        styleOverrides: {
            label: {
                ...theme.typography.body2
            },
            iconContainer: {
                width: "auto"
            }
        }
    }
});

export default treeView;
