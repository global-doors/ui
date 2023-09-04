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
