import React from "react";
import css from './Like.module.scss';

type LikeTypeProps = {
    like: number
}

const LikeMemo: React.FC<LikeTypeProps> = (
    {
        like
    }
) => {
    return (
        <div className={css.like}>
            <img className={css.pic}
                 src="https://iqonic.design/themes/socialv/html-dark/images/icon/01.png"
                 alt=""/>
            <span>{like}</span>
        </div>
    );
};

export const Like = React.memo(LikeMemo);
