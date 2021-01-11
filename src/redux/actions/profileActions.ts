import {v1} from "uuid";
import {PROFILE_TYPES} from "../constats/profileConstats";


export type ActionsProfileType =
    ReturnType<typeof addProfilePostAC> |
    ReturnType<typeof addProfilePostTextAC>

export const addProfilePostAC = () => ({
    type: PROFILE_TYPES.ADD_PROFILE_POST,
    postId: v1(),
} as const);
export const addProfilePostTextAC = (postText: string) => ({
    type: PROFILE_TYPES.ADD_PROFILE_POST_TEXT,
    postText
} as const);
