import React from "react";
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export function Dialogs() {
    return (
        <div className={css.dialogs}>

           <div className={css.listName}>
               <div className={`${css.name} ${css.active}`}>
                   <NavLink to="/dialogs/1">Slavych</NavLink>
               </div>

               <div className={css.name}>
                   <NavLink to="/dialogs/2">Dimych</NavLink>
               </div>
           </div>

            <div className={css.listMessage}>
                <div className={css.message}>
                    Hi
                </div>

                <div className={css.message}>
                    How are you?
                </div>

                <div className={css.message}>
                    Yo
                </div>
            </div>
        </div>
    );
}