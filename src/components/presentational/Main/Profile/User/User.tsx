import React from "react";
import css from './User.module.scss';

type UserFCType = {
    info?: any
}
export const User: React.FC<UserFCType> = props => {

    const {info} = props;


    const userSmPhoto = info.photos.small !== null
        ? info.photos.small
        : "/react_social_network/images/user/05.jpg";

    const userLgPhoto = info.photos.large == null
        ? info.photos.large
        : "/react_social_network/images/page-img/profile-bg1.jpg";

    return <div className={css.user}>
        <div className={css.backgroundWrapper}>
            <img className={css.background}
                 src={userLgPhoto}
                 alt={info.fullName}/>
        </div>

        <figure className={css.info}>
            <div className={css.avatarWrapper}>
                <img className={css.avatar}
                     src={userSmPhoto}
                     alt={info.fullName}/>
            </div>

            <figcaption className={css.caption}>
                {info.fullName}
            </figcaption>
        </figure>
    </div>
};
