import React from "react";
import {useSelector} from "react-redux";
import {selectProfile} from "../../../../redux/selectors/profileSelectors";
import {useDispatch} from "../../../../redux/useDispatchHOC";
import {addProfilePostAC, addProfilePostTextAC} from "../../../../redux/actions/profileActions";
import {Profile} from "../../../presentational/Main/Profile/Profile";

export const ProfileContainer: React.FC = () => {

    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();

    const addProfilePost = () => dispatch(addProfilePostAC());
    const addProfilePostText = (title: string) => dispatch(addProfilePostTextAC(title));

    return <Profile addProfilePostText={addProfilePostText}
                    addProfilePost={addProfilePost}
                    profile={profile}/>
};
