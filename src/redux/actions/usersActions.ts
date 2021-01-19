import {USERS_TYPES} from "../constats/usersConstats";
import {UsersType} from "../reducers/usersReducer";

export type UsersACType =
    ReturnType<typeof showMoreUsers>
    | ReturnType<typeof showNextPageUsers>
    | ReturnType<typeof followUser>
    | ReturnType<typeof unFollowUser>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof fetchingFollowEvent>


export const showMoreUsers = (users: Array<UsersType>) => ({
    type: USERS_TYPES.SHOW_MORE_USERS,
    payload: {users}
} as any);
export const showNextPageUsers = (users: Array<UsersType>) => ({
    type: USERS_TYPES.SHOW_NEXT_USERS,
    payload: {users}
} as any);
export const unFollowUser = (userId: number) => ({
    type: USERS_TYPES.UN_FOLLOW_USER,
    payload: {userId}
} as any);
export const followUser = (userId: number) => ({
    type: USERS_TYPES.FOLLOW_USER,
    payload: {userId}
} as any);
export const setCurrentPage = (page: number) => ({
    type: USERS_TYPES.SET_CURRENT_PAGE,
    payload: {page}
} as any);
export const setTotalCount = (totalCount: number) => ({
    type: USERS_TYPES.SET_TOTAL_COUNT,
    payload: {totalCount}
} as any);
export const toggleIsFetching = (isFetching: boolean) => ({
    type: USERS_TYPES.TOGGLE_IS_FETCHING,
    payload: {isFetching}
} as any);
export const fetchingFollowEvent = (isFetching: boolean, userId: number) => ({
    type: USERS_TYPES.TOGGLE_FOLLOW_EVENT,
    payload: {isFetching, userId}
} as any);

export const usersAC = {
    showMoreUsers,
    showNextPageUsers,
    followUser,
    unFollowUser,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
    fetchingFollowEvent,
};