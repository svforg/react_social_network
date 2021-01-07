import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redux/store";
import {DialogsType} from "../../../redux/reducers/dialogsReducer";
import {addDialogMessageAC, addDialogMessageTextAC} from "../../../redux/actions/dialogsActions";
import {Dialogs} from "./Dialogs";

export const DialogsContainer: React.FC = () => {

    const dialogs = useSelector<AppStoreType, DialogsType>(state => state.dialogs);
    const dispatch = useDispatch();

    const addDialogMessage = () => dispatch(addDialogMessageAC());
    const addDialogMessageText = (title: string) =>dispatch(addDialogMessageTextAC(title));

    return (
        <Dialogs
            dialogs={dialogs}
            addDialogMessageText={addDialogMessageText}
            addDialogMessage={addDialogMessage}/>
    );
};



