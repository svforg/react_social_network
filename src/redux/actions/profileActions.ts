import {v1} from "uuid";
import {PROFILE_TYPES} from "../constats/profileConstats";
import {useDispatch as _useDispatch} from "react-redux";
import {DialogsACType} from "./dialogsActions";

export type ProfileACType =
    ReturnType<typeof addProfilePostAC> |
    ReturnType<typeof addProfilePostTextAC>

export const addProfilePostAC = () => ({
    type: PROFILE_TYPES.ADD_PROFILE_POST,
    payload: {postId: v1()}
} as const);
export const addProfilePostTextAC = (postText: string) => ({
    type: PROFILE_TYPES.ADD_PROFILE_POST_TEXT,
     payload: {postText}
} as const);

export function useProfileDispatch() {
    const dispatch = _useDispatch();
    return (ActionCreator: ProfileACType) => dispatch(ActionCreator);
}