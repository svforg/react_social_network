import React from "react";
import css from './Sidebar.module.scss';
import {Item} from "./SidebarItem/SidebarItem";

export type SidebarType = {
    slug: string
    title: string
}
export type SidebarPropsType = {
    sidebar: Array<SidebarType>
}

export const Sidebar: React.FC<SidebarPropsType> = React.memo(props => {

    const {sidebar} = props;

    const sidebarElements = Array.isArray(sidebar) && sidebar.length &&
        sidebar.map((sidebarItem: SidebarType, index: number) => <Item key={index}
                                                                       sidebarItem={sidebarItem}/>
        );

    return <aside className={css.sidebar}>
        <nav className={css.sidebarNav}>
            <ul className={css.list}>{sidebarElements}</ul>
        </nav>
    </aside>
});
