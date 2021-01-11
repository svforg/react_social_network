import { IGlobalState } from '../store';

interface IRootState extends IGlobalState {}

export const selectUsers = (state: IRootState) => state.users.users;
export const selectPageSize = (state: IRootState) => state.users.pageSize;
export const selectTotalCount = (state: IRootState) => state.users.totalCount;
export const selectCurrentPage = (state: IRootState) => state.users.currentPage;
export const selectIsFetching = (state: IRootState) => state.users.isFetching;

export const selectAll = (state: IRootState) => state.users;
