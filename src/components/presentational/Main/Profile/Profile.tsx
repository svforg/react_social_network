import React from "react";
import {Posts} from "./Posts/Posts";
import {User} from "./User/User";
import {CreatePost} from "./CreatePost/CreatePost";
import {ProfileType} from "../../../../redux/reducers/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
    addProfilePost: () => void
    addProfilePostText: (title: string) => void
}

export const Profile: React.FC<ProfilePropsType> = React.memo(props => {

    const {
        profile,
        addProfilePost,
        addProfilePostText,
    } = props;

    return <>
        <User/>

        <CreatePost addProfilePost={addProfilePost}
                    addProfilePostText={addProfilePostText}
                    postText={profile.postText}/>

        <Posts posts={profile.posts}/>
    </>
});
