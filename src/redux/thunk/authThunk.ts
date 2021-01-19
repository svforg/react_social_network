import {instanceApi} from "../../api/server";
import {authAC} from "../actions/authActions";

export const fetchAuth = () =>
    async (dispatch: any) => {

        let data = await instanceApi.signIn();

        if (data.resultCode === 0) {

            let {
                id,
                email,
                login
            } = data.data;

            dispatch(authAC.setUserData(id, email, login));
        }
    };

export const authTC = {
    fetchAuth,
};