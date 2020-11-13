import React from "react";
import css from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {User} from "./User/User";

type PostPropsType = {
    text: string
    like: number
}
type ProfilePropsType = {
    posts: Array<PostPropsType>
}
export function Profile(props: ProfilePropsType) {

    return (
        <>
            <User />
            <Posts posts={props.posts}/>
        </>
    );
}