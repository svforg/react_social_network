import React from "react";
import {NavLink} from "react-router-dom";
import css from './User.module.scss';
import {UsersType} from "../../../../../redux/reducers/usersReducer";
import {CustomButton} from "../../../../shared/CustomButton/CustomButton";
import axios from "axios";
import {followUserAPI, unFollowUserAPI} from "../../../../../api/api";

type UserPropsType = {
    user: UsersType
    followEvent: boolean
    unFollowUser: (userId: string) => void
    followUser: (userId: string) => void
    toggleFollowEventCallback: (isFetching: boolean) => void
}

export const User: React.FC<UserPropsType> = React.memo(props => {

    const  {
        user,
        toggleFollowEventCallback,
        unFollowUser,
        followUser,
        followEvent,
    } = props;

    const followCallback = (userId: string): any => {
        toggleFollowEventCallback(true);

        followUserAPI(userId)
            .then(data => {
                data.resultCode === 0 && followUser(userId);
                toggleFollowEventCallback(false);
            });
    };

    const unFollowCallback = (userId: string): any => {
        toggleFollowEventCallback(true);

        unFollowUserAPI(userId)
            .then(data => {
                data.resultCode === 0 && unFollowUser(userId);
                toggleFollowEventCallback(false);
            });
    };


    const userSmPhoto = user.photos.small !== null
        ? user.photos.small
        : "/react_social_network/images/user/05.jpg";

    const userLgPhoto = user.photos.large !== null
        ? user.photos.large
        : "/react_social_network/images/page-img/profile-bg1.jpg";

    const userStatus = user.status !== null ? user.status : "@designer";

    return <li key={user.id} className={css.card}>
        <div className={css.coverContainer}>
            <img
                className={css.coverImg}
                alt="cover-img"
                src={userLgPhoto}/>
        </div>

        <div className={css.userContainer}>
            <div className={css.userDetails}>
                <div className={css.userImgInner}>
                    <NavLink  to={'/profile/' + user.id}>
                        <img
                            className={css.userImg}
                            alt="profile-img"
                            src={userSmPhoto}/>
                    </NavLink>
                </div>

                <div>
                    <NavLink className={css.coverContainer} to={'/profile/' + user.id}>
                        <h4>{user.name}</h4>
                    </NavLink>

                    <h6>{userStatus}</h6>
                    {/*<p>{user.location.city}, {user.location.country}</p>*/}
                </div>
            </div>

            {
                !user.followed
                    ? <CustomButton disabled={followEvent}
                                    onClick={followCallback(user.id)}>
                        Follow</CustomButton>

                    : <CustomButton disabled={followEvent}
                                    onClick={unFollowCallback(user.id)}>
                        UnFollow</CustomButton>
            }
        </div>
    </li>
});
