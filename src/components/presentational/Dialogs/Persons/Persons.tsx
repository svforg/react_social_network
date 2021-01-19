import React from "react";
import css from './Persons.module.scss';
import {PersonsType} from "../../../../redux/reducers/dialogsReducer";
import {NavLink} from "react-router-dom";

type PersonsPropsType = {
    persons: Array<PersonsType>
}

export const Persons: React.FC<PersonsPropsType> = React.memo(props => {

    const {persons} = props;

    const personElements = Array.isArray(persons) && persons.length &&
        persons.map((person: PersonsType) =>
            <NavLink key={person.id} to={`/dialogs/${person.id}`}>{person.name}</NavLink>
        );

    return <div className={css.listName}>{personElements}</div>
});
