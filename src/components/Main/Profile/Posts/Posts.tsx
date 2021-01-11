import React from "react";
import css from './Posts.module.scss';
import {Post} from "./Post/Post";
import {ProfilePostType} from "../../../../redux/reducers/profileReducer";

type PostsPropsType = {
    state: Array<ProfilePostType>
}

const PostsMemo: React.FC<PostsPropsType> = (
    {
        state
    }
) => {

    const postElements = state && state
        .map(post => <Post key={post.id} text={post.text} like={post.like}/>);

    return (
        <section className={css.posts}>
            {postElements}
        </section>
    );
};

export const Posts = React.memo(PostsMemo);
