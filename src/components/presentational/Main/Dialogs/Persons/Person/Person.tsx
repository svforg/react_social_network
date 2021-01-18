import React from "react";
import css from './Person.module.scss';
import {NavLink} from "react-router-dom";
import {PersonsType} from "../../../../../../redux/reducers/dialogsReducer";

type PersonPropsType = PersonsType

export const Person: React.FC<PersonPropsType> = React.memo(props => {

    const {
        id,
        name
    } = props;

    const path = `/dialogs/${id}`;

    return <div className={`${css.name} ${css.active}`}>
        <NavLink to={path}>{name}</NavLink>
    </div>
});
