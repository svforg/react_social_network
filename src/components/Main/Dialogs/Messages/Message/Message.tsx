import React from "react";
import css from './Message.module.scss';

type MessagePropsType = {
    text: string
}

const MessageMemo: React.FC<MessagePropsType> = (
    {
        text
    }
) => {
    return (
        <div className={css.message}>
            {text}
        </div>
    );
};

export const Message = React.memo(MessageMemo);
