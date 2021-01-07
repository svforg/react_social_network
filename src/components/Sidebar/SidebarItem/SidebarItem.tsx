import React from "react";
import {NavLink} from "react-router-dom";
import css from './SidebarItem.module.scss';
import {SidebarType} from "../../../redux/actions/sidebarActions";

type SidebarPropsType = {
    sidebarItem: SidebarType
}

const ItemMemo: React.FC<SidebarPropsType> = (
    {
        sidebarItem
    }
) => {
    return (
        <li className={css.item}>
            <NavLink activeClassName={css.active} to={sidebarItem.slug}>{sidebarItem.title}</NavLink>
        </li>
    );
};

export const Item = React.memo(ItemMemo);
