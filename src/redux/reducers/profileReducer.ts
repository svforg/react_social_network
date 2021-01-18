
import {ProfileACType} from "../actions/profileActions";
import {PROFILE_TYPES} from "../constats/profileConstats";

export type ProfileInfoContactsType = {
    facebook: string
    github: string
    instagram: string
    mainLink: any
    twitter: string
    vk: string
    website: any
    youtub?: any
}
export type ProfileInfoPhotosType = {
    small: string
    large: string
}
export type ProfileInfoType = {
    userId: number
    aboutMe: string
    contacts: ProfileInfoContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: ProfileInfoPhotosType
}
export type ProfilePostType = {
    id: string
    text: string
    like: number
}
export type ProfileType = {
    info: ProfileInfoType
    posts: Array<ProfilePostType>
    postText: string
}

let initialState = {
    info: {
        userId: 1,
        aboutMe: "string",
        contacts: {
            facebook: "facebook.com",
            github: "github.com",
            instagram: "instagra.com/sds",
            mainLink: null,
            twitter: "https://twitter.com/@sdf",
            vk: "vk.com/dimych",
            website: null,
            youtube: null
        },
        fullName: "string",
        lookingForAJob: true,
        lookingForAJobDescription: "string",
        photos: {
            small: "string", large: "string"
        }
    },
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
            return action.payload.postText
                ? { ...state, postText: action.payload.postText}
                : state;

        case PROFILE_TYPES.SHOW_PROFILE:
            return action.payload.info
                ? { ...state, info: {...action.payload.info}}
                : state;

        default:
            return state;
    }
};

//let prepareString = (string: string) => string.replace(/\s+/g, ' ').trim();
