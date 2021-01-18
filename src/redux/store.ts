import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from "./reducers/dialogsReducer";
import {profileReducer} from "./reducers/profileReducer";
import {usersReducer} from "./reducers/usersReducer";

const reducers = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
});

export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers);

// @ts-ignore
window.store = store;
















