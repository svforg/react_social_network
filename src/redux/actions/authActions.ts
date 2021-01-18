import {AUTH_TYPES} from "../constats/authConstats";

export type AuthACType =
    ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: null, email: null, login: null) => ({
    type: AUTH_TYPES.SET_USER_DATA,
    payload: {data: {id, email, login}}
} as any);
