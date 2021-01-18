import React from "react";
import {NavLink} from "react-router-dom";
import css from './User.module.scss';
import {UsersType} from "../../../../../redux/reducers/usersReducer";
import {CustomButton} from "../../../../shared/CustomButton/CustomButton";

type UserPropsType = {
    user: UsersType
    unFollowUser: (userId: string) => void
    followUser: (userId: string) => void
}

export const User: React.FC<UserPropsType> = React.memo(props => {

    const  {
        user,
        unFollowUser,
        followUser,
    } = props;

    const userSmPhoto = user.photos.small !== null
        ? user.photos.small
        : "/react_social_network/images/user/05.jpg";

    const userLgPhoto = user.photos.large !== null
        ? user.photos.large
        : "/react_social_network/images/page-img/profile-bg1.jpg";

    const userStatus = user.status !== null ? user.status : "@designer";

    return <li key={user.id} className={css.card}>
        <NavLink className={css.coverContainer} to={'/profile/' + user.id}>
            <img
                className={css.coverImg}
                alt="cover-img"
                src={userLgPhoto}/>
        </NavLink>

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
});
