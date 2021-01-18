import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {
    followUserAC,
    setCurrentPageAC,
    setTotalCountAC, showMoreUsersAC,
    showNextUsersAC, toggleFollowEventAC, toggleIsFetchingAC,
    unFollowUserAC
} from "../../../../redux/actions/usersActions";
import {PreLoader} from "../../../shared/PreLoader/PreLoader";
import {Users} from "../../../presentational/Main/Users/Users";
import {UsersState} from "../../../../redux/reducers/usersReducer";
import {getUsersAPI} from "../../../../api/api";

class UsersContainer extends React.Component<TProps> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;

        this.props.toggleIsFetchingAC(true);

        getUsersAPI(pageSize, currentPage)
            .then(data => {

                this.props.toggleIsFetchingAC(false);
                this.props.showMoreUsersAC(data.items);
                //this.props.setTotalCountAC(response.data.totalCount);
                this.props.setTotalCountAC(200);
            });
    };

    loadMoreCallback = (pagesIndex: number) => {
        const pageSize = this.props;
        this.props.setCurrentPageAC(pagesIndex);

        getUsersAPI(pageSize, pagesIndex)
            .then(data => {
                this.props.showMoreUsersAC(data.items);
            });
    };

    loadNextCallback = (pagesIndex: number) => {
        const pageSize = this.props;

        this.props.toggleIsFetchingAC(true);
        this.props.setCurrentPageAC(pagesIndex);

        getUsersAPI(pageSize, pagesIndex)
            .then(data => {
                this.props.toggleIsFetchingAC(false);
                this.props.showNextUsersAC(data.items);
                //this.props.showMoreUsersAC(response.data.items);
            });
    };

    followUserCallback = (userId: string) => this.props.followUserAC(userId);
    unFollowUserCallback = (userId: string) => this.props.unFollowUserAC(userId);
    toggleFollowEventCallback = (isFetching: boolean) => this.props.toggleFollowEventAC(isFetching);

    render() {

        const {
            isFetching,
            users,
            currentPage,
            pageSize,
            totalCount,
            followEvent,
        } = this.props;

        return (
            isFetching
            ? <PreLoader/>
            : <Users
                users={users}
                pageSize={pageSize}
                totalCount={totalCount}
                currentPage={currentPage}
                followEvent={followEvent}
                loadNextCallback={this.loadNextCallback}
                loadMoreCallback={this.loadMoreCallback}
                followUser={this.followUserCallback}
                unFollowUser={this.unFollowUserCallback}
                toggleFollowEventCallback={this.toggleFollowEventCallback}/>
        )
    }
}

const mapStateToProps = ({users}: { users: UsersState }): UsersState => {
    return {
        users: users.users,
        pageSize: users.pageSize,
        totalCount: users.totalCount,
        currentPage: users.currentPage,
        isFetching: users.isFetching,
        followEvent: users.followEvent,
    }
};

const connector = connect(mapStateToProps, {
    showNextUsersAC,
    showMoreUsersAC,
    followUserAC,
    unFollowUserAC,
    setCurrentPageAC,
    setTotalCountAC,
    toggleIsFetchingAC,
    toggleFollowEventAC,
});

type TProps = ConnectedProps<typeof connector>;

export default connector(UsersContainer);