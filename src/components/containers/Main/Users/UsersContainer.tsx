import React from "react";
import {connect, ConnectedProps} from "react-redux";
import axios from "axios";
import {
    followUserAC,
    setCurrentPageAC,
    setTotalCountAC, showMoreUsersAC,
    showNextUsersAC, toggleIsFetchingAC,
    unFollowUserAC
} from "../../../../redux/actions/usersActions";
import {PreLoader} from "../../../shared/PreLoader/PreLoader";
import {Users} from "../../../presentational/Main/Users/Users";
import {UsersState} from "../../../../redux/reducers/usersReducer";

// классовый компонент создан в целях ознакомления
// но не в целях нарушения консистентности кода
class UsersContainer extends React.Component<TProps> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;

        this.props.toggleIsFetchingAC(true);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false);
                this.props.showMoreUsersAC(response.data.items);
                //this.props.setTotalCountAC(response.data.totalCount);
                this.props.setTotalCountAC(200);
            });
    };

    loadMoreCallback = (pagesIndex: number) => {
        const pageSize = this.props;
        this.props.setCurrentPageAC(pagesIndex);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${pagesIndex}`)
            .then(response => {
                this.props.showMoreUsersAC(response.data.items);
            });
    };

    loadNextCallback = (pagesIndex: number) => {
        const pageSize = this.props;

        this.props.toggleIsFetchingAC(true);
        this.props.setCurrentPageAC(pagesIndex);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${pagesIndex}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false);
                this.props.showNextUsersAC(response.data.items);
                //this.props.showMoreUsersAC(response.data.items);
            });
    };

    followUserCallback = (userId: string) => this.props.followUserAC(userId);
    unFollowUserCallback = (userId: string) => this.props.unFollowUserAC(userId);

    render() {

        const {
            isFetching,
            users,
            currentPage,
            pageSize,
            totalCount,
        } = this.props;

        return (
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

        )
    }
}

const mapStateToProps = ({users}: { users: UsersState }): UsersState => {
    return {
        users: users.users,
        isFetching: users.isFetching,
        currentPage: users.currentPage,
        pageSize: users.pageSize,
        totalCount: users.totalCount
    }
};

const connector = connect(mapStateToProps, {
    followUserAC,
    unFollowUserAC,
    showNextUsersAC,
    showMoreUsersAC,
    setCurrentPageAC,
    toggleIsFetchingAC,
    setTotalCountAC,
});

type TProps = ConnectedProps<typeof connector>;

export default connector(UsersContainer);