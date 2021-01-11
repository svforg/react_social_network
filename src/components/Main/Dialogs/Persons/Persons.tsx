import React from "react";
import {Person} from "./Person/Person";
import css from './Persons.module.scss';
import {PersonsType} from "../../../../redux/reducers/dialogsReducer";

type PersonsPropsType = {
    state: Array<PersonsType>
}

export const Persons: React.FC<PersonsPropsType> = React.memo((
    {
        state
    }
) => {
    const personElements = state && state
        .map((person: PersonsType) => <Person id={person.id} name={person.name}/>);

    return (
        <div className={css.listName}>
            {personElements}
        </div>
    );
});
