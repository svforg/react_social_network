import React from "react";
import css from './Like.module.css';


type LikeTypeProps = {
    like: number,
}

export function Like(props: LikeTypeProps) {
    return (
        <div className={css.like}>
            <img className={css.pic}
                 src="https://iqonic.design/themes/socialv/html-dark/images/icon/01.png"
                 alt=""/>
            <span>{props.like}</span>
        </div>
    );
}