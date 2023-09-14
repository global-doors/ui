import { AxiosRequestConfig } from "axios";
import axiosInstance from "src/utils/axios";

export const serverUrl = import.meta.env.VITE_API_URL;

const headers = <T>(
    // accessToken: string = "",
    contentType: string = "application/json",
    accept: string = "application/json"
): AxiosRequestConfig<T> => ({
    headers: {
        // "x-access-token": accessToken,
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
    const response = await axiosInstance.get(`${path}`, {
        baseURL: serverUrl,
        ...headers(contentType, accept),
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
    const response = await axiosInstance.post(`${path}`, data, {
        baseURL: serverUrl,
        ...headers(contentType, accept),
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
    const response = await axiosInstance.put(`${path}`, data, {
        baseURL: serverUrl,
        ...headers(contentType, accept),
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
    const response = await axiosInstance.delete(`${path}`, {
        baseURL: serverUrl,
        ...headers(contentType, accept),
        ...config
    });
    return response.data;
};
