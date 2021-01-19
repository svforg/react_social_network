import {AUTH_TYPES} from "../constats/authConstats";

export type AuthACType =
    ReturnType<typeof setUserData>

export const setUserData = (id: any, email: any, login: any) => ({
    type: AUTH_TYPES.SET_USER_DATA,
    payload: {data: {id, email, login}}
} as any);


export const authAC = {
    setUserData
};
