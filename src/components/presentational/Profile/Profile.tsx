import React from "react";
import {Posts} from "./Posts/Posts";
import {User} from "./User/User";
import {CreatePost} from "./CreatePost/CreatePost";
import {ProfilePostType} from "../../../redux/reducers/profileReducer";
import {PreLoader} from "../../shared/PreLoader/PreLoader";

type ProfilePropsType = {
    info?: any
    posts: ProfilePostType[]
    postText: string
    addProfilePost: () => void
    addProfilePostText: (title: string) => void
}

export const Profile: React.FC<ProfilePropsType> = React.memo(props => {

    const {
        info,
        posts,
        postText,
        addProfilePost,
        addProfilePostText,
    } = props;

    if (!info) return <PreLoader/>;

    return <>
        <User info={info}/>

        <CreatePost addProfilePost={addProfilePost}
                    addProfilePostText={addProfilePostText}
                    postText={postText}/>

        <Posts posts={posts}/>
    </>
});
