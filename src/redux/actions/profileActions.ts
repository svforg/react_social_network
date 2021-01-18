import {v1} from "uuid";
import {PROFILE_TYPES} from "../constats/profileConstats";
import {ProfileInfoType} from "../reducers/profileReducer";

export type ProfileACType =
    ReturnType<typeof addProfilePostAC>
    | ReturnType<typeof addProfilePostTextAC>
    | ReturnType<typeof showProfileAC>

export const addProfilePostAC = () => ({
    type: PROFILE_TYPES.ADD_PROFILE_POST,
    payload: {postId: v1()}
} as any);
export const addProfilePostTextAC = (postText: string) => ({
    type: PROFILE_TYPES.ADD_PROFILE_POST_TEXT,
    payload: {postText}
} as any);
export const showProfileAC = (info: ProfileInfoType) => ({
    type: PROFILE_TYPES.SHOW_PROFILE,
    payload: {info}
} as any);
