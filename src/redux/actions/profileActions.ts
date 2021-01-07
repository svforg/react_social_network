import {v1} from "uuid";
import {ADD_PROFILE_POST, ADD_PROFILE_POST_TEXT} from "../constants/profileConstants";

export type ActionsProfileType =
    ReturnType<typeof addProfilePostAC> |
    ReturnType<typeof addProfilePostTextAC>

export const addProfilePostAC = () => ({
    type: ADD_PROFILE_POST,
    postId: v1(),
} as const);
export const addProfilePostTextAC = (postText: string) => ({
    type: ADD_PROFILE_POST_TEXT,
    postText: postText,
} as const);
