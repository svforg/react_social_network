import React from "react";
import css from './Person.module.css';
import {NavLink} from "react-router-dom";

type PersonPropsType = {
    id: number
    name: string
}
export function Person(props: PersonPropsType) {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${css.name} ${css.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
