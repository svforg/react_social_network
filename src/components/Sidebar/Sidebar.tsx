import React from "react";
import {NavLink} from "react-router-dom";
import css from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={css.sidebar}>
            <nav>
                <ul className={css.list}>
                    <li className={css.item}>
                        <NavLink activeClassName={css.active} to="/profile">Profile</NavLink>
                    </li>

                    <li className={css.item}>
                        <NavLink activeClassName={css.active} to="/dialogs">Messages</NavLink>
                    </li>

                    <li className={css.item}>
                        <NavLink activeClassName={css.active} to="/news">News</NavLink>
                    </li>

                    <li className={css.item}>
                        <NavLink activeClassName={css.active} to="/music">Music</NavLink>
                    </li>

                    <li className={css.item}>
                        <NavLink activeClassName={css.active} to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}