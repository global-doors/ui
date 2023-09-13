import axios, { AxiosRequestConfig } from "axios";

export const serverUrl = import.meta.env.VITE_API_URL;

const headers = <T>(
    accessToken: string = "",
    contentType: string = "application/json",
    accept: string = "application/json"
): AxiosRequestConfig<T> => ({
    headers: {
        "x-access-token": accessToken,
        "Content-Type": contentType,
        accept
    }
});

export const GET = async <T>(
    path: string, accessToken?: string,
    accept?: string,
    contentType?: string,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response = await axios.get(`${path}`, {
        baseURL: serverUrl,
        ...headers(accessToken, contentType, accept),
        ...config
    });
    return response.data;
};

export const POST = async <B, T>(
    path: string,
    data: B,
    accessToken?: string,
    accept?: string,
    contentType?: string,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response = await axios.post(`${path}`, data, {
        baseURL: serverUrl,
        ...headers(accessToken, contentType, accept),
        ...config
    });
    return response.data;
};

export const PUT = async <B, T>(
    path: string,
    data: B,
    accessToken?: string,
    accept?: string,
    contentType?: string,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response = await axios.put(`${path}`, data, {
        baseURL: serverUrl,
        ...headers(accessToken, contentType, accept),
        ...config
    });
    return response.data;
};

export const DELETE = async <T>(
    path: string,
    accessToken?: string,
    accept?: string,
    contentType?: string,
    config?: AxiosRequestConfig
): Promise<T> => {
    const response = await axios.delete(`${path}`, {
        baseURL: serverUrl,
        ...headers(accessToken, contentType, accept),
        ...config
    });
    return response.data;
};
