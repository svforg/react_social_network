import {ADD_PROFILE_POST, ADD_PROFILE_POST_TEXT} from "../constants/profileConstants";
import {ActionsProfileType} from "../actions/profileActions";

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

const profileReducer = (state:ProfileType = initialState, action: ActionsProfileType): ProfileType => {
    switch (action.type) {
        case ADD_PROFILE_POST: {

            let copyState = {...state};
            if (prepareString(copyState.postText) !== "") {
                let newPost: ProfilePostType = {
                    id: action.postId,
                    text: copyState.postText,
                    like: 0,
                };
                copyState.posts = [...copyState.posts, newPost];
                copyState.postText = "";
                return copyState;
            }
            break;
        }

        case ADD_PROFILE_POST_TEXT: {

            if (prepareString(action.postText) !== "") {
                state.postText = action.postText;
                return {...state};
            }

            break;
        }
    }

    return state;
};

let prepareString = (string: string) => string.replace(/\s+/g, ' ').trim();

export default profileReducer;