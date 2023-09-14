const ROOTS = {
    AUTH: "/auth",
    DASHBOARD: "/dashboard"
};

const paths = {
    auth: {
        jwt: {
            login: `${ROOTS.AUTH}/login`,
            register: `${ROOTS.AUTH}/register`,
            forgotPassword: `${ROOTS.AUTH}/forgot-password`
        }
    },
    // DASHBOARD
    dashboard: {
        root: ROOTS.DASHBOARD,
        settings: `${ROOTS.DASHBOARD}/settings`,
        sales: {
            root: `${ROOTS.DASHBOARD}/sales`,
            addOrder: `${ROOTS.DASHBOARD}/sales/add-order`,
            order: (id: string) => `${ROOTS.DASHBOARD}/sales/order/${id}`
        }
    }
};

export default paths;
