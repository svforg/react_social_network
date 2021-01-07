import React from "react";
import css from './Person.module.scss';
import {NavLink} from "react-router-dom";
import {PersonsType} from "../../../../../redux/reducers/dialogsReducer";

type PersonPropsType = PersonsType


const PersonMemo: React.FC<PersonPropsType> = (
    {
        id,
        name
    }
) => {
    const path = `/dialogs/${id}`;

    return (
        <div className={`${css.name} ${css.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};

export const Person = React.memo(PersonMemo);
