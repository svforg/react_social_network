import React from "react";
import {useSelector} from "react-redux";
import {selectDialogs} from "../../../../redux/selectors/dialogsSelectors";
import {useDispatch} from "../../../../redux/useDispatchHOC";
import {addDialogMessageAC, addDialogMessageTextAC} from "../../../../redux/actions/dialogsActions";
import {Dialogs} from "../../../presentational/Main/Dialogs/Dialogs";

export const DialogsContainer: React.FC = () => {

    const dialogs = useSelector(selectDialogs);
    const dispatch = useDispatch();

    const addDialogMessage = () => dispatch(addDialogMessageAC());
    const addDialogMessageText = (title: string) => dispatch(addDialogMessageTextAC(title));

    return <Dialogs addDialogMessage={addDialogMessage}
                    addDialogMessageText={addDialogMessageText}
                    dialogs={dialogs}/>
};
