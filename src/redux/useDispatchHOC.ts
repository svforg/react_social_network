import {useDispatch as _useDispatch} from "react-redux";
import {ProfileACType} from "./actions/profileActions";
import {DialogsACType} from "./actions/dialogsActions";
import {UsersACType} from "./actions/usersActions";

type RootActionCreators =
    ProfileACType
    | UsersACType
    | DialogsACType;

export function useDispatch() {
    const dispatch = _useDispatch();
    return (ActionCreator: RootActionCreators) => dispatch(ActionCreator);
}
