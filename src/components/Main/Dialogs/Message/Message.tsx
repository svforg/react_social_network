import React from "react";
import css from './Message.module.css';

type MessagePropsType = {
    text: string
}
export function Message(props: MessagePropsType) {
    return (
        <div className={css.message}>
            {props.text}
        </div>
    );
}