import React from "react";
import css from './Post.module.scss';

type PostPropsType = {
    text: string
    like: number
}

export const Post: React.FC<PostPropsType> = React.memo(props => {

    const {
        text,
        like
    } = props;

    return <article className={css.post}>
        <div className={css.user}>
            <div className={css.ava}>
                <img className={css.pic}
                     src="https://iqonic.design/themes/socialv/html-dark/images/user/01.jpg"
                     alt="Anna Stesha"/>
            </div>

            <h5 className={css.name}>Anna Stesha</h5>
        </div>

        <div className={css.message}>{text}</div>

        <div className={css.like}>
            <img className={css.pic}
                 src="https://iqonic.design/themes/socialv/html-dark/images/icon/01.png"
                 alt=""/>

            <span>{like}</span>
        </div>
    </article>
});
