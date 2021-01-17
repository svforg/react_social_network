import React from "react";
import {Message} from "./Message/Message";
import css from './Messages.module.scss';
import {CreateMessage} from "./CreateMessage/CreateMessage";
import {MessagesType} from "../../../../redux/reducers/dialogsReducer";

type MessagesPropsType = {
    state: Array<MessagesType>
    addDialogMessage: () => void
    addDialogMessageText: (messageText: string) => void
    messageText: string
}

const MessagesMemo: React.FC<MessagesPropsType> = (
    {
        state,
        addDialogMessage,
        addDialogMessageText,
        messageText
    }
) => {
    const messageElements = state && state
        .map((message: MessagesType, index: number) => <Message key={index} text={message.text}/>);

    return (
        <div className={css.listMessage}>
            {messageElements}

            <CreateMessage
                addDialogMessage={addDialogMessage}
                addDialogMessageText={addDialogMessageText}
                state={messageText}/>
        </div>
    );
};

export const Messages = React.memo(MessagesMemo);
