import { IGlobalState } from '../store';

interface IRootState extends IGlobalState {}

export const selectProfile = (state: IRootState) => state.profile;
