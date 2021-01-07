import React from "react";
import css from './Post.module.scss';
import {User} from "./User/User";
import {Message} from "./Message/Message";
import {Like} from "./Like/Like";

type PostPropsType = {
    text: string
    like: number
}

const PostMemo: React.FC<PostPropsType> = (
    {
        text,
        like
    }
) => {
    return (
        <article className={css.post}>
            <User/>
            <Message message={text}/>
            <Like like={like}/>
        </article>
    );
};

export const Post = React.memo(PostMemo);
