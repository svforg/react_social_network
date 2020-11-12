import React from "react";
import css from './Posts.module.css';
import {Post} from "./Post/Post";

export function Posts() {
    return (
        <section className={css.posts}>
            <Post message="Hello world" like={10}/>
            <Post message="It's first post" like={20}/>
        </section>
    );
}