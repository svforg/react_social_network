import {AUTH_TYPES} from "../constats/authConstats";

export type AuthACType =
    ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: any, email: any, login: any) => ({
    type: AUTH_TYPES.SET_USER_DATA,
    payload: {data: {id, email, login}}
} as any);
