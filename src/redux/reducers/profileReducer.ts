
import {ProfileACType} from "../actions/profileActions";
import {PROFILE_TYPES} from "../constats/profileConstats";

export type ProfilePostType = {
    id: string
    text: string
    like: number
}
export type ProfileType = {
    posts: Array<ProfilePostType>
    postText: string
}

let initialState = {
    posts: [
        {id: "1", text: "Hello world", like: 10},
        {id: "2", text: "It's first post", like: 20},
        {id: "3", text: "It's second post", like: 30},
    ],
    postText: "",
};

export const profileReducer = (state:ProfileType = initialState, action: ProfileACType): ProfileType => {

    switch (action.type) {

        case PROFILE_TYPES.ADD_PROFILE_POST:
            return state.postText
                ? {
                    ...state,
                    postText: "",
                    posts: [...state.posts, { id: action.payload.postId, text: state.postText, like: 0 }]
                  }
                : state;

        case PROFILE_TYPES.ADD_PROFILE_POST_TEXT:
            return action.payload.postText ? { ...state, postText: action.payload.postText} : state;

        default:
            return state;
    }
};

//let prepareString = (string: string) => string.replace(/\s+/g, ' ').trim();
