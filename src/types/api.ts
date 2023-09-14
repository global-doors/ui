export type AccessTokenPayload = { // TODO: can we make this camelCase ?
    "user_id": number,
    "username": string,
    "unleashed_code": string,
    "exp": number

    "x-access-token": string;
    "x-token-life": number;
};
