import {AuthACType} from "../actions/authActions";
import {AUTH_TYPES} from "../constats/authConstats";

export type AuthType = {
    id: any
    email: any
    login: any
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state: AuthType = initialState, action: AuthACType): AuthType => {

    switch (action.type) {

        case AUTH_TYPES.SET_USER_DATA:
            return  {...state, ...action.payload.data, isAuth: true};

        default:
            return state;
    }
};
