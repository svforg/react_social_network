import React from "react";
import css from './Message.module.css';

type MessageTypeProps = {
    message: string,
}

export function Message(props: MessageTypeProps) {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    );
}
