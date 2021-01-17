import React from "react";
import {useSelector} from "react-redux";
import {addDialogMessageAC, addDialogMessageTextAC} from "../../../redux/actions/dialogsActions";
import {Dialogs} from "../../../components/Main/Dialogs/Dialogs";
import {useDispatch} from "../../../redux/useDispatchHOC";
import {selectDialogs} from "../../../redux/selectors/dialogsSelectors";

export const DialogsContainer: React.FC = () => {
    const dialogs = useSelector(selectDialogs);
    const dispatch = useDispatch();

    const addDialogMessage = () => dispatch(addDialogMessageAC());
    const addDialogMessageText = (title: string) => dispatch(addDialogMessageTextAC(title));

    return <Dialogs addDialogMessage={addDialogMessage}
                    addDialogMessageText={addDialogMessageText}
                    dialogs={dialogs}/>
};
