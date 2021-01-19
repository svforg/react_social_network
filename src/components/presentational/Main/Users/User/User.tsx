import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import css from './User.module.scss';
import {UsersType} from "../../../../../redux/reducers/usersReducer";
import {CustomButton} from "../../../../shared/CustomButton/CustomButton";
import {instanceApi} from "../../../../../api/server";


type UserPropsType = {
    user: UsersType
    followEvent: any[]
    unFollowUser: (userId: string) => void
    followUser: (userId: string) => void
    toggleFollowEventCallback: (isFetching: boolean, userId: string) => void
}

export const User: React.FC<UserPropsType> = React.memo(props => {

    const  {
        user,
        followUser,
        unFollowUser,
        toggleFollowEventCallback,
        followEvent,
    } = props;

    const followCallback = () => {};
    const unFollowCallback = () => {};

    const userSmPhoto = user.photos.small !== null
        ? user.photos.small
        : "/react_social_network/images/user/05.jpg";

    const userLgPhoto = user.photos.large !== null
        ? user.photos.large
        : "/react_social_network/images/page-img/profile-bg1.jpg";

    const userStatus = (user.status !== null && user.status !== "")  ? user.status : "@designer";

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
                    ? <CustomButton disabled={followEvent.some(id => id === user.id)}
                                    onClick={() => {
                                        toggleFollowEventCallback(true, user.id);

                                        instanceApi.followUserAPI(user.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    followUser(user.id);
                                                    toggleFollowEventCallback(false, user.id);
                                                }
                                            });
                                    }}>
                        Follow</CustomButton>

                    : <CustomButton disabled={followEvent.some(id => id === user.id)}
                                    onClick={() => {
                                        toggleFollowEventCallback(true, user.id);

                                        instanceApi.unFollowUserAPI(user.id)
                                            .then(data => {
                                                if (data.resultCode == 0) {
                                                    unFollowUser(user.id);
                                                    toggleFollowEventCallback(false, user.id);
                                                }
                                            });
                                    }}>
                        UnFollow</CustomButton>
            }
        </div>
    </li>
});
