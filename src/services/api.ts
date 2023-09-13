import { POST } from "src/services/axios";
import { LoginForm } from "src/types/forms";

export type LoginResponse = {
    "unleashed_customer_code": number;
    "username": string;
    "x-access-token": string;
    "x-token-life": number;
};

export const authenticate = async (
    username: string,
    password: string
): Promise<LoginResponse> => POST<LoginForm, LoginResponse>(
    "/authenticate",
    { username, password }
);
