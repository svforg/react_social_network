import {instanceApi} from "../../api/server";
import {profileAC} from "../actions/profileActions";

export const getUserProfile = (userId: string) =>
    async (dispatch: any) => {

        let data = await instanceApi.getUserProfile(userId);

        dispatch(profileAC.showProfile(data));
    };

export const profileTC = {
    getUserProfile,
};