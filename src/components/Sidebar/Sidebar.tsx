import React from "react";
import {BrowserRouter, NavLink} from "react-router-dom";
import css from './Sidebar.module.css';
import {Post} from "../Main/Profile/Posts/Post/Post";

type SidebarItemsPropsType = {
    slug: string
    title: string
}
type SidebarType = {
    sidebarItems: Array<SidebarItemsPropsType>
}

export function Sidebar(props: SidebarType) {
    let sidebarElements = props.sidebarItems
        .map( sidebarItem => <Item slug={sidebarItem.slug} title={sidebarItem.title}/> );


    return (
        <aside className={css.sidebar}>
            <nav>
                <ul className={css.list}>
                    { sidebarElements }


                </ul>
            </nav>
        </aside>
    );
}


type ItemSidebarPropsType = {
    slug: string
    title: string
}

export function Item(props: ItemSidebarPropsType) {
    return (
        <li className={css.item}>
            <NavLink activeClassName={css.active} to={props.slug}>{props.title}</NavLink>
        </li>
    );
}