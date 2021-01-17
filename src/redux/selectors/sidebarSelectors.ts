import { IGlobalState } from '../store';

interface IRootState extends IGlobalState {}

export const selectSidebar = (state: IRootState) => state.sidebar;
