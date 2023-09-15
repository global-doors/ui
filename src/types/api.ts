export type AccessTokenPayload = { // TODO: can we make this camelCase ?
    "user_id": number,
    "username": string,
    "unleashed_code": string,
    "exp": number

    "x-access-token": string;
    "x-token-life": number;
};

export type PaginationModel = {
    page: number;
    pageSize: number;
};

export type PaginationInfo = {
    NumberOfItems: number
    NumberOfPages: number
    PageNumber: number
    PageSize: number
};

export type Paginated<T> = {
    Items: T[];
    Pagination: PaginationInfo
};

export type SalesOrder = {
    AllocateProduct: boolean;
    BCSubTotal: number;
    BCTaxTotal: number;
    BCTotal: number;
    Comments: string;
    CompletedDate?: unknown; // Unknown. Date ??? FIXME
    CreatedBy: string;
    CreatedOn: string; // "/Date(1693466939168)/" ???? FIXME
    Currency: {
        CurrencyCode: string;
        DefaultBuyRate?: unknown, // ??? FIXME
        DefaultSellRate?: unknown,
        Description: string;
        Guid: string;
        LastModifiedOn: string; // "/Date(1642368887836)/"
    }
    CustomOrderStatus?: unknown;
    Customer: {
        CurrencyId: number;
        CustomerCode: string;
        CustomerName: string;
        Guid: string;
        LastModifiedOn: string; // FIXME "/Date(1693400195169)/"
    }
    CustomerRef: string;
    DeliveryCity: string;
    DeliveryContact?: unknown;
    DeliveryCountry: string;
    DeliveryInstruction: string;
    DeliveryMethod: string;
    DeliveryName: string;
    DeliveryPostCode: string;
    DeliveryRegion: string;
    DeliveryStreetAddress: string;
    DeliveryStreetAddress2?: string;
    DeliverySuburb?: string;
    DiscountRate: number;
    ExchangeRate: number;
    Guid: string;
    LastModifiedBy: string;
    LastModifiedOn: string; // FIXME "/Date(1693467373905)/"
    OrderDate: string; // FIXME "/Date(1693440000000)/"
    OrderNumber: string;
    OrderStatus: string;
    PaymentDueDate: string; // FIXME "/Date(1693470946137)/"
    ReceivedDate?: string; // FIXME PRESUMABLY
    RequiredDate: string; // FIXME "/Date(1694563200000)/"
    SalesAccount?: unknown;
    SalesOrderGroup?: unknown;
    SalesOrderLines: {
        AverageLandedPriceAtTimeOfSale: number;
        BCLineTax: number;
        BCLineTotal: number;
        BCUnitPrice: number;
        BatchNumbers?: unknown;
        Comments: string;
        CostOfGoodsAccount: string;
        DiscountRate: number;
        DueDate: string; // FIXME "/Date(1693466939133)/"
        Guid: string;
        LastModifiedOn: string; // FIXME "/Date(1693467346150)/"
        LineNumber: number;
        LineTax: number;
        LineTaxCode?: unknown;
        LineTotal: number;
        LineType?: unknown;
        OrderQuantity: number;
        Product: {
            Guid: string;
            ProductCode: string;
            ProductDescription: string;
        }
        SerialNumbers?: unknown;
        TaxRate: number;
        UnitPrice: number;
        Volume?: unknown;
        Weight?: unknown;
        XeroSalesAccount: string;
        XeroTaxCode: string;
    }[]
    SalesPerson: {
        Email: string;
        FullName: string;
        Guid: string;
        LastModifiedOn: string; // FIXME  "/Date(1675161882207)/",
        Obsolete: boolean;
    }
    SendAccountingJournalOnly: boolean;
    SourceId?: unknown;
    SubTotal: number;
    Tax: {
        CanApplyToExpenses: boolean;
        CanApplyToRevenue: boolean;
        Description: string;
        Guid: string;
        LastModifiedOn: string; // FIXME "/Date(1693513068632)/",
        Obsolete: boolean;
        TaxCode: string;
        TaxRate: number
    }
    TaxRate: number;
    TaxTotal: number;
    Total: number;
    TotalVolume: number;
    TotalWeight: number;
    Warehouse: {
        AddressLine1?: unknown;
        AddressLine2?: unknown;
        City: string;
        ContactName?: unknown;
        Country?: unknown;
        DDINumber?: unknown;
        FaxNumber?: unknown;
        Guid: string;
        IsDefault: boolean;
        LastModifiedOn: string; // FIXME "/Date(1642514156156)/"
        MobileNumber?: unknown;
        Obsolete: boolean;
        PhoneNumber?: unknown;
        PostCode: string;
        Region?: unknown;
        StreetNo: string;
        Suburb: string;
        WarehouseCode: string;
        WarehouseName: string;
    }
    XeroTaxCode: string;
};
