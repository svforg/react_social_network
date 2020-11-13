import React from "react";
import css from './Post.module.css';
import {User} from "./User/User";
import {Message} from "./Message/Message";
import {Like} from "./Like/Like";

type PostPropsType = {
    text: string
    like: number
}

export function Post(props: PostPropsType) {
    return (
        <article className={css.post}>
            <User />
            <Message message={props.text}  />
            <Like like={props.like}/>
        </article>
    );
}

