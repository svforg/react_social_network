import {instanceApi} from "../../api/server";
import {usersAC} from "../actions/usersActions";

export const fetchUsers = (currentPage: number, pageSize: any, switchNextPage: boolean) =>
    async (dispatch: any) => {
        switchNextPage && dispatch(usersAC.toggleIsFetching(true));

        let data = await instanceApi.getUsers(currentPage, pageSize);

        if (Array.isArray(data.items) && data.items.length) {

            switchNextPage && dispatch(usersAC.toggleIsFetching(false));

            switchNextPage
                ? dispatch(usersAC.showNextPageUsers(data.items))
                : dispatch(usersAC.showMoreUsers(data.items));

            dispatch(usersAC.setCurrentPage(currentPage));

            //dispatch(setTotalCount(response.data.totalCount));
            dispatch(usersAC.setTotalCount(200));
        }
    };

export const toggleFollowing = (userId: number, toggle: boolean) =>
    async (dispatch: any) => {

        dispatch(usersAC.fetchingFollowEvent(true, userId));

        let data = toggle
            ? await instanceApi.followUser(userId)
            : await instanceApi.unFollowUser(userId);

        if (data.resultCode === 0) {
            toggle
                ? dispatch(usersAC.followUser(userId))
                : dispatch(usersAC.unFollowUser(userId));
        }

        dispatch(usersAC.fetchingFollowEvent(false, userId));
    };



export const usersTC = {
    fetchUsers,
    toggleFollowing
};