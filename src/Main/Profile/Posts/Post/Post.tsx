import React from "react";
import css from './Post.module.css';

import {User} from "./User/User";
import {Message} from "./Message/Message";
import {Like} from "./Like/Like";


type PostTypeProps = {
    message: string,
    like: number,
}
export function Post(props: PostTypeProps) {
    return (
        <article className={css.post}>
            <User />
            <Message message={props.message}  />
            <Like like={props.like}/>
        </article>
    );
}

