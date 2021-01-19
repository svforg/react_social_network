import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {usersAC} from "../../../redux/actions/usersActions";
import {UsersState} from "../../../redux/reducers/usersReducer";
import {usersTC} from "../../../redux/thunk/usersThunk";
import {PreLoader} from "../../shared/PreLoader/PreLoader";
import {Users} from "../../presentational/Users/Users";


class UsersContainer extends React.Component<TProps> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.fetchUsers(currentPage, pageSize, true);
    };

    loadNextCallback  = (pagesIndex: number) => {
        const pageSize = this.props;
        this.props.fetchUsers(pagesIndex, pageSize, true);
    };
    loadMoreCallback= (pagesIndex: number) => {
        const pageSize = this.props;
        this.props.fetchUsers(pagesIndex, pageSize, false);
    };
    toggleFollowing = (userId: number, toggle: boolean) => this.props.toggleFollowing(userId, toggle);

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
                    toggleFollowing={this.toggleFollowing}/>
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
    followUserAC: usersAC.followUser,
    unFollowUserAC: usersAC.unFollowUser,
    setCurrentPageAC: usersAC.setCurrentPage,

    fetchUsers: usersTC.fetchUsers,
    toggleFollowing: usersTC.toggleFollowing,
});

type TProps = ConnectedProps<typeof connector>;

export default connector(UsersContainer);