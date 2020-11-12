import React from "react";
import css from './Posts.module.css';
import {Post} from "./Post/Post";

type PostPropsType = {
    text: string,
    like: number,
}
type PostsPropsType = {
    posts: Array<PostPropsType>,
}
export function Posts(props: PostsPropsType) {
    debugger;
    let postElements = props.posts
        .map( post => <Post text={post.text} like={post.like}/> );

    return (
        <section className={css.posts}>
            { postElements }
        </section>
    );
}