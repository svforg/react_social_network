import React from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {
    followUserAC,
    setCurrentPageAC,
    setTotalCountAC, showMoreUsersAC,
    showNextUsersAC, toggleIsFetchingAC,
    unFollowUserAC, useDispatch
} from "../../../redux/actions/usersActions";
import {Users} from "../../../components/Main/Users/Users";
import {PreLoader} from "../../../components/ui-elements/PreLoader/PreLoader";
import {selectAll, selectPageSize} from "../../../redux/selectors/usersSelectors";


export class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = useSelector(selectAll);
        const dispatch = useDispatch();

        dispatch(toggleIsFetchingAC(true));

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(showMoreUsersAC(response.data.items));
                //dispatch(setTotalCount(response.data.totalCount));
                dispatch(setTotalCountAC(200));
            });
    };

    componentDidUpdate() {
    };

    loadMoreCallback = (pagesIndex: number) => {
        const pageSize = useSelector(selectPageSize);
        const dispatch = useDispatch();
        dispatch(setCurrentPageAC(pagesIndex));
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${pagesIndex}`)
            .then(response => {
                dispatch(showMoreUsersAC(response.data.items));
            });
    };

    loadNextCallback = (pagesIndex: number) => {
        const dispatch = useDispatch();
        const pageSize = useSelector(selectPageSize);

        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(pagesIndex));
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${pagesIndex}`)
            .then(response => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(showNextUsersAC(response.data.items));
            });
    };

    followUserCallback = () => followUserAC;
    unFollowUserCallback = () => unFollowUserAC;

    render() {

        const {
            isFetching,
            users,
            currentPage,
            pageSize,
            totalCount,
        } = useSelector(selectAll);

        return (
            <>
                {
                    isFetching
                        ? <PreLoader/>
                        : <Users
                            users={users}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            totalCount={totalCount}
                            unFollowUser={this.unFollowUserCallback}
                            loadNextCallback={this.loadNextCallback}
                            loadMoreCallback={this.loadMoreCallback}
                            followUser={this.followUserCallback}/>
                }
            </>
        );
    }
}
