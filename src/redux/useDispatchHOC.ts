import {useDispatch as _useDispatch} from "react-redux";
import {UsersACType} from "./actions/usersActions";
import {ProfileACType} from "./actions/profileActions";
import {DialogsACType} from "./actions/dialogsActions";

type RootActionCreators =
    ProfileACType
    | DialogsACType;

export function useDispatch() {
    const dispatch = _useDispatch();
    return (ActionCreator: RootActionCreators) => dispatch(ActionCreator);
}
