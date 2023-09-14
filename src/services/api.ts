import { POST, PUT } from "src/services/axios";

export type LoginResponse = {
    "unleashed_customer_code": number;
    "username": string;
    "x-access-token": string;
    "x-token-life": number;
};

export const authenticate = async (
    username: string,
    password: string
): Promise<LoginResponse> => POST(
    "/authenticate",
    {
        username,
        password
    }
);

export type ResetPasswordResponse = {
    "unleashed_customer_code": string;
    "username": string;
};
export const resetPassword = async (
    oldPassword: string,
    newPassword: string
): Promise<ResetPasswordResponse> => PUT(
    "/user/reset-password",
    {
        old_password: oldPassword,
        new_password: newPassword
    }
);
