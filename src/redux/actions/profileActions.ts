import {v1} from "uuid";
import {PROFILE_TYPES} from "../constats/profileConstats";
import {ProfileInfoType} from "../reducers/profileReducer";

export type ProfileACType =
    ReturnType<typeof addProfilePost>
    | ReturnType<typeof addProfilePostText>
    | ReturnType<typeof showProfile>


export const addProfilePost = () => ({
    type: PROFILE_TYPES.ADD_PROFILE_POST,
    payload: {postId: v1()}
} as any);
export const addProfilePostText = (postText: string) => ({
    type: PROFILE_TYPES.ADD_PROFILE_POST_TEXT,
    payload: {postText}
} as any);
export const showProfile = (info: ProfileInfoType) => ({
    type: PROFILE_TYPES.SHOW_PROFILE,
    payload: {info}
} as any);


export const profileAC = {
    addProfilePost,
    addProfilePostText,
    showProfile,
};