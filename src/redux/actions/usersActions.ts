import {useDispatch as _useDispatch} from 'react-redux';
import {USERS_TYPES} from "../constats/usersConstats";
import {UsersType} from "../reducers/usersReducer";

export type UsersACTypes =
    ReturnType<typeof showNextUsersAC>
    | ReturnType<typeof showMoreUsersAC>
    | ReturnType<typeof followUserAC>
    | ReturnType<typeof unFollowUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>


export const showNextUsersAC = (users: Array<UsersType>) => ({
    type: USERS_TYPES.SHOW_NEXT_USERS,
    payload: {users}
} as
const );
export const showMoreUsersAC = (users: Array<UsersType>) => ({
    type: USERS_TYPES.SHOW_MORE_USERS,
    payload: {users}
} as
const );
export const unFollowUserAC = (userId: string) => ({
    type: USERS_TYPES.UN_FOLLOW_USER,
    payload: {userId}
} as
const );
export const followUserAC = (userId: string) => ({
    type: USERS_TYPES.FOLLOW_USER,
    payload: {userId}
} as
const );
export const setCurrentPageAC = (page: number) => ({
    type: USERS_TYPES.SET_CURRENT_PAGE,
    payload: {page}
} as
const );
export const setTotalCountAC = (totalCount: number) => ({
    type: USERS_TYPES.SET_TOTAL_COUNT,
    payload: {totalCount}
} as
const );
export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: USERS_TYPES.TOGGLE_IS_FETCHING,
    payload: {isFetching}
} as
const );

export function useDispatch() {
    const dispatch = _useDispatch();
    return (ActionCreator: UsersACTypes) => dispatch(ActionCreator);
}

