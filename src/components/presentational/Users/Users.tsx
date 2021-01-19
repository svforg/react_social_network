import React from "react";
import Grid from '@material-ui/core/Grid';
import {User} from "./User/User";
import {UsersType} from "../../../redux/reducers/usersReducer";
import {CustomButton} from "../../shared/CustomButton/CustomButton";

type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage: number
    followEvent: any[]
    loadNextCallback: (pagesIndex: number) => void
    loadMoreCallback: (pagesIndex: number) => void
    toggleFollowing: (userId: number, toggle: boolean) => any
}
export const Users: React.FC<UsersPropsType> = React.memo(props => {

    const  {
        users,
        pageSize,
        totalCount,
        currentPage,
        followEvent,
        loadNextCallback,
        loadMoreCallback,
        toggleFollowing,
    } = props;

    const propsTotal = !totalCount ? 0 : totalCount;
    const propsPageSize = (!pageSize || pageSize === 0) ? 1 : pageSize;

    const pagesCnt = Math.ceil(propsTotal / propsPageSize);
    const pagesIndexes = [];
    for (let i = 1; i <= pagesCnt; i++) pagesIndexes.push(i);

    const pages = //Array.isArray(pagesIndexes) && pagesIndexes.length &&
        pagesIndexes.map((pagesIndex: number) => {
            const loadNext = () => loadNextCallback(pagesIndex);

            return currentPage === pagesIndex
                ? <strong key={pagesIndex}>{pagesIndex}-</strong>
                : <small key={pagesIndex} onClick={loadNext}>{pagesIndex}-</small>
        });

    let leftColumn: JSX.Element[] = [];
    let rightColumn: JSX.Element[] = [];

    Array.isArray(users) && users.length &&
        users.map((user: UsersType, index: number) => {

            const current = <User key={user.id}
                                  user={user}
                                  followEvent={followEvent}
                                  toggleFollowing={toggleFollowing}/>;

            index % 2 === 0 ? leftColumn.push(current) : rightColumn.push(current)
        });

    const loadMore = () => loadMoreCallback(currentPage + 1);

    return  <>

        <div>{pages}</div>

        <Grid container item xs={12} spacing={2}>
            <Grid item xs={6}><ul>{leftColumn}</ul></Grid>

            <Grid item xs={6}><ul>{rightColumn}</ul></Grid>
        </Grid>

        <CustomButton onClick={loadMore}>Get users</CustomButton>
    </>;
});