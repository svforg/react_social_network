import React from "react";
import {Person} from "./Person/Person";
import css from './Persons.module.scss';
import {PersonsType} from "../../../../../redux/reducers/dialogsReducer";

type PersonsPropsType = {
    persons: Array<PersonsType>
}

export const Persons: React.FC<PersonsPropsType> = React.memo(props => {

    const {persons} = props;

    const personElements = Array.isArray(persons) && persons.length &&
        persons.map((person: PersonsType) => <Person key={person.id}
                                                     id={person.id}
                                                     name={person.name}/>
        );

    return <div className={css.listName}>{personElements}</div>
});
