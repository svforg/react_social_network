import React from "react";
import css from './Dialogs.module.scss';
import {Persons} from "./Persons/Persons";
import {Messages} from "./Messages/Messages";
import {DialogsType} from "../../../redux/reducers/dialogsReducer";

type DialogsPropsType = {
    dialogs: DialogsType
    addDialogMessage: () => void
    addDialogMessageText: (messageText: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = React.memo(props => {

    const {
        dialogs,
        addDialogMessage,
        addDialogMessageText,
    } = props;

    return <div className={css.dialogs}>
        <Persons persons={dialogs.persons}/>

        <Messages addDialogMessage={addDialogMessage}
                  addDialogMessageText={addDialogMessageText}
                  messageText={dialogs.messageText}
                  messages={dialogs.messages}/>
    </div>
});



