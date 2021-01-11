import {UsersACTypes} from "../actions/usersActions";
import {USERS_TYPES} from "../constats/usersConstats";

export type UsersPhotosType = {
    small: string
    large: string
}
export type UsersType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos: UsersPhotosType
}
export type UsersState = {
    users: Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

let initialState = {
    users: [],
    pageSize: 16,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
};

export const usersReducer = (state: UsersState = initialState, action: UsersACTypes): UsersState => {

    switch (action.type) {

        case USERS_TYPES.FOLLOW_USER: {
            let stateCopy = {...state, users: state.users};

            let newUsers = stateCopy.users.map(user =>
                (user.id === action.payload.userId) ? {...user, followed: true} : user );

            return {...stateCopy, users: newUsers};
        }

        case USERS_TYPES.UN_FOLLOW_USER: {
            let stateCopy = {...state, users: state.users};

            let newUsers = stateCopy.users.map(user =>
                (user.id === action.payload.userId) ? {...user, followed: false} : user );

            return {...stateCopy, users: newUsers};
        }

        case USERS_TYPES.SHOW_NEXT_USERS:
            return {...state, users: [...action.payload.users]};

        case USERS_TYPES.SHOW_MORE_USERS:
            return {...state, users: [...state.users, ...action.payload.users]};

        case USERS_TYPES.SET_CURRENT_PAGE:
            return  {...state, currentPage: action.payload.page};

        case USERS_TYPES.SET_TOTAL_COUNT:
            return  {...state, totalCount: action.payload.totalCount};

        case USERS_TYPES.TOGGLE_IS_FETCHING:
            return  {...state, isFetching: action.payload.isFetching};

        default:
            return state;
    }
};

