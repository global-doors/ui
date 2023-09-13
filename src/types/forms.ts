export type LoginForm = {
    username: string;
    password: string;
};

export type SalesOrderFilterForm = {
    orderStatus: string[];
    customerName: string;
    orderNumber: string;
    customerRef: string
    deliveryMethod: string[];
    warehouse: string[];
    printed: string[];
    dateFrom: Date;
    dateTo: Date;
};

export type AddLineForm = {
    line: string;
    image: string;
    productCode: string;
    productDescription: string;
    quantity: number;
    shipped: boolean
    invoiced: boolean;
    unitPrice: string;
    unit: number;
    discount: number;
    discountPrice: string;
    subtotal: string;
    taxRate: number,
    lineTotal: string;
    margin: string;
};

export type AddChargeForm = {
    charge: string;
    price: string;
    salesAccount: string;
    taxRate: string;
    discount: string;
};
export type ResetPasswordForm = {
    oldPassword: string;
    newPassword: string;
};

export type AddSalesOrderForm = {
    customerCode: string;
    customerName: string;
    customerRef: string;
    discount: string;
    taxRate: string;
    warehouse: string;

    deliveryContact: string;
    deliveryName: string;
    addressLine1: string;
    addressLine2: string;
    suburb: string;
    city: string;
    state: string;
    postcode: string;
    county: string;

    salesPerson: string;
    salesOrderGroup: string;
    orderDate: string;
    requiredDate: string;
    salesOrderTemplate: string;
    packingSlipTemplate: string;

    lines: {
        line: string;
        image: string;
        productCode: string;
        productDescription: string;
        quantity: number;
        shipped: boolean
        invoiced: boolean;
        unitPrice: string;
        unit: number;
        discount: number;
        discountPrice: string;
        subtotal: string;
        taxRate: number,
        lineTotal: string;
        margin: string;
    }[];

    charges: {
        charge: string;
        price: string;
        salesAccount: string;
        taxRate: string;
        discount: string;
    }[];
};
