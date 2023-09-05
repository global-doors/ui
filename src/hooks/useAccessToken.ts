import { useCallback } from "react";

import useLocalStorage from "./useLocalStorage";

export type AccessTokenPayload = { // TODO: can we make this camelCase ?
    user_id: number;
    username: string;
    firstname: string;
    email: string;
    session_id: string;
    revoked: boolean;
    date_added: string; // ISO
    exp: number;
    "x-access-token": string;
    "x-token-life": number;
};

const useAccessToken = (): {
    token: string | undefined,
    setToken: (token: string) => void,
    revoke: VoidFunction
} => {
    const [value, setValue] = useLocalStorage<string>("access-token", "");
    const revoke = useCallback(() => setValue(undefined), [setValue]);
    return { token: value, setToken: setValue, revoke };
};

export default useAccessToken;
