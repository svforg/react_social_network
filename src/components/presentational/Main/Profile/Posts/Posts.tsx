import React from "react";
import css from './Posts.module.scss';
import {Post} from "./Post/Post";
import {ProfilePostType} from "../../../../../redux/reducers/profileReducer";

type PostsPropsType = {
    posts: Array<ProfilePostType>
}

export const Posts: React.FC<PostsPropsType> = React.memo(props => {

    const {posts} = props;

    const postElements = Array.isArray(posts) && posts.length &&
        posts.map(post => <Post key={post.id}
                                text={post.text}
                                like={post.like}/>
        );

    return <section className={css.posts}>{postElements}</section>
});
