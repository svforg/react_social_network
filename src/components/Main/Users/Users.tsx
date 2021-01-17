import React from "react";
import {User} from "./User/User";
import {UsersType} from "../../../redux/reducers/usersReducer";
import Grid from '@material-ui/core/Grid';
import {CustomButton} from "../../ui-elements/CustomButton/CustomButton";

type UsersPropsType = {
    users: Array<UsersType>
    unFollowUser: (userId: string) => void
    followUser: (userId: string) => void
    loadNextCallback: (pagesIndex: number) => void
    loadMoreCallback: (pagesIndex: number) => void
    currentPage: number
    totalCount: number
    pageSize: number
}
export const Users: React.FC<UsersPropsType> = (
    {
        users,
        unFollowUser,
        followUser,
        loadNextCallback,
        loadMoreCallback,
        currentPage,
        totalCount,
        pageSize,
    }
) => {
    const propsTotal = !totalCount ? 0 : totalCount;
    const propsPageSize = (!pageSize || pageSize === 0) ? 1 : pageSize;

    const pagesCnt = Math.ceil(propsTotal / propsPageSize);
    const pagesIndexes = [];
    for (let i = 1; i <= pagesCnt; i++) pagesIndexes.push(i);
    const pages = pagesIndexes.map((pagesIndex: number) => {

        const loadNext = () => loadNextCallback(pagesIndex);

        return (
            currentPage === pagesIndex
                ? <strong key={pagesIndex}>{pagesIndex}-</strong>
                : <small key={pagesIndex} onClick={loadNext}>{pagesIndex}-</small>
        )
    });

    let leftColumn: any = [];
    let rightColumn: any = [];
    users
        .map((user: UsersType, index: number) => {
            index % 2 === 0
                ? leftColumn.push(<User key={user.id}
                                        user={user}
                                        unFollowUser={unFollowUser}
                                        followUser={followUser}/>)
                : rightColumn.push(<User key={user.id}
                                         user={user}
                                         unFollowUser={unFollowUser}
                                         followUser={followUser}/>)
        });

    const loadMore = () => loadMoreCallback(currentPage + 1);

    return (
        <>
            <div>
                {pages}
            </div>
            <Grid container item xs={12} spacing={2}>
                <React.Fragment>
                    <Grid item xs={6}>
                        <ul>{leftColumn}</ul>
                    </Grid>
                    <Grid item xs={6}>
                        <ul>{rightColumn}</ul>
                    </Grid>
                </React.Fragment>
            </Grid>

            <CustomButton onClick={loadMore}>Get users</CustomButton>
        </>
    );
};