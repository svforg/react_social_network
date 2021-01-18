import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from "./reducers/dialogsReducer";
import {profileReducer} from "./reducers/profileReducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/authReducer";

const reducers = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer,
});

export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers);

// @ts-ignore
window.store = store;
















