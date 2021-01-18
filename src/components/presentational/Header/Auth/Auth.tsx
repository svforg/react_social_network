import React from "react";
import css from './Auth.module.scss';
import {NavLink} from "react-router-dom";

export const Auth: React.FC = React.memo(props => {
    return <div className={css.authBlock}>
        <NavLink to={'/login'}>Sign up</NavLink>
    </div>
});
