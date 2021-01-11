import React from "react";
import {connect} from "react-redux";
import {addProfilePostAC, addProfilePostTextAC} from "../../../redux/actions/profileActions";
import {Profile} from "./Profile";

const mapStateToProps = (state: any): any => {
    return {
        profile: state.profileReducer
    }
};
const mapDispatchToProps = (dispatch: any): any => {
    return {
        addProfilePost: () => dispatch(addProfilePostAC()),
        addProfilePostText: (title: string) => dispatch(addProfilePostTextAC(title)),
    }
};

export const ProfileContainer: any = connect(mapStateToProps, mapDispatchToProps)(Profile);
