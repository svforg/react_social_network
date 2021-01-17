import { IGlobalState } from '../store';

interface IRootState extends IGlobalState {}

export const selectDialogs = (state: IRootState) => state.dialogs;
