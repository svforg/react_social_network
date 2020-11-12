import React from "react";
import css from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Person} from "./Person/Person";

type PersonPropsType = {
    id: number,
    name: string,
}
type MessagePropsType = {
    text: string,
}
type DialogsPropsType = {
    persons: Array<PersonPropsType>,
    messages: Array<MessagePropsType>,
}

export function Dialogs(props: DialogsPropsType) {

    let personElements = props.persons
        .map(person => <Person id={person.id} name={person.name} /> );
    let messageElements = props.messages
        .map(message => <Message text={message.text}/> );

    return (
        <div className={css.dialogs}>

            <div className={css.listName}>
                { personElements }
            </div>

            <div className={css.listMessage}>
                { messageElements }
            </div>
        </div>
    );
}


