import React from "react";
import css from './Messages.module.scss';
import {CreateMessage} from "./CreateMessage/CreateMessage";
import {MessagesType} from "../../../../redux/reducers/dialogsReducer";

type MessagesPropsType = {
    messages: Array<MessagesType>
    addDialogMessage: () => void
    addDialogMessageText: (messageText: string) => void
    messageText: string
}

export const Messages: React.FC<MessagesPropsType> = React.memo(props => {

    const {
        messages,
        addDialogMessage,
        addDialogMessageText,
        messageText
    } = props;

    const messageElements = Array.isArray(messages) && messages.length &&
        messages.map((message: MessagesType, index: number) =>
            <p key={index}>{message.text}</p>
        );

    return <div className={css.listMessage}>
        {messageElements}

        <CreateMessage addDialogMessage={addDialogMessage}
                       addDialogMessageText={addDialogMessageText}
                       messageText={messageText}/>
    </div>
});
