import { useMemo } from "react";
import { Iconify } from "src/components/iconify";
import paths from "src/routes/paths";

const icon = (name: string) => (
    <Iconify icon={name} />
    // https://icon-sets.iconify.design/solar/
);

const useNavData = () => useMemo(
    () => [
        // OVERVIEW
        // {
        //   subheader: "overview",
        //   items: [
        //     { title: "one", path: paths.dashboard.root, icon: ICONS.dashboard },
        //     { title: "two", path: paths.dashboard.two, icon: ICONS.ecommerce },
        //     {
        //       title: "three",
        //       path: paths.dashboard.three,
        //       icon: ICONS.analytics,
        //     },
        //   ],
        // },

        // MANAGEMENT
        {
            subheader: "sales",
            items: [
                {
                    title: "sales",
                    path: paths.dashboard.sales.root,
                    icon: icon("solar:graph-up-line-duotone"),
                    children: [
                        {
                            title: "your orders",
                            path: paths.dashboard.sales.root,
                            icon: icon("solar:chart-square-line-duotone")
                        },
                        {
                            title: "place new order",
                            path: paths.dashboard.sales.addOrder,
                            icon: icon("solar:add-square-line-duotone")
                        }
                    ]
                }
            ]
        }
    ],
    []
);

export default useNavData;
