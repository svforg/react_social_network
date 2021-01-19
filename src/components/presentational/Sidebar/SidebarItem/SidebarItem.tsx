import React from "react";
import {NavLink} from "react-router-dom";
import css from './SidebarItem.module.scss';
import {SidebarType} from "../Sidebar";

type SidebarPropsType = {
    sidebarItem: SidebarType
}

export const Item: React.FC<SidebarPropsType> = React.memo( props => {

    const {sidebarItem} = props;

    return <li className={css.item}>
        <NavLink activeClassName={css.active} to={sidebarItem.slug}>{sidebarItem.title}</NavLink>
    </li>
});
