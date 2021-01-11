import React from "react";
import css from './User.module.scss';
import {UsersType} from "../../../../redux/reducers/usersReducer";
import {CustomButton} from "../../../ui-elements/CustomButton/CustomButton";

type UserPropsType = {
    user: UsersType
    unFollowUser: (userId: string) => void
    followUser: (userId: string) => void
}

export const User: React.FC<UserPropsType> = React.memo((
    {
        user,
        unFollowUser,
        followUser,
    }
) => {

    let userSmPhoto = user.photos.small !== null
        ? user.photos.small
        : "/soc_network/images/user/05.jpg";

    let userLgPhoto = user.photos.large !== null
        ? user.photos.large
        : "/soc_network/images/page-img/profile-bg1.jpg";

    let userStatus = user.status !== null ? user.status : "@designer";

    return (
        <li className={css.card}>
            <div className={css.coverContainer}>
                <img
                    className={css.coverImg}
                    alt="cover-img"
                    src={userLgPhoto}/>
            </div>
            <div className={css.userContainer}>
                <div className={css.userDetails}>
                    <div className={css.userImgInner}>
                        <img
                            className={css.userImg}
                            alt="profile-img"
                            src={userSmPhoto}/>
                    </div>
                    <div>
                        <h4>{user.name}</h4>
                        <h6>{userStatus}</h6>
                        {/*<p>{user.location.city}, {user.location.country}</p>*/}
                    </div>
                </div>
                {
                    !user.followed
                        ? <CustomButton onClick={() => followUser(user.id)}>Follow</CustomButton>
                        : <CustomButton onClick={() => unFollowUser(user.id)}>UnFollow</CustomButton>
                }
            </div>
        </li>
    );
});
