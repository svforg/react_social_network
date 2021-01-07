import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redux/store";
import {ProfileType} from "../../../redux/reducers/profileReducer";
import {addProfilePostAC, addProfilePostTextAC} from "../../../redux/actions/profileActions";
import {Profile} from "./Profile";

export const ProfileContainer: React.FC = () => {

    const profile = useSelector<AppStoreType, ProfileType>(state => state.profile);
    const dispatch = useDispatch();

    const addProfilePost = () => dispatch(addProfilePostAC());
    const addProfilePostText = (title: string) => dispatch(addProfilePostTextAC(title));

    return (
        <Profile
            addProfilePost={addProfilePost}
            addProfilePostText={addProfilePostText}
            profile={profile}/>
    );
};
