import React from "react";
import css from './Message.module.scss';

type MessageTypeProps = {
    message: string,
}

const MessageMemo: React.FC<MessageTypeProps> = (
    {
        message
    }
) => {
    return (
        <div className={css.message}>
            {message}
        </div>
    );
};

export const Message = React.memo(MessageMemo);
