import React from "react";
import css from './Sidebar.module.scss';
import {Item} from "./SidebarItem/SidebarItem";
import {SidebarType} from "../../../redux/actions/sidebarActions";

type SidebarPropsType = {
    sidebar: Array<SidebarType>
}
export const Sidebar: React.FC<SidebarPropsType> = React.memo((
    {
        sidebar
    }
) => {

    const sidebarElements = sidebar && sidebar
        .map((sidebarItem: SidebarType) => <Item sidebarItem={sidebarItem}/>);

    return (
        <aside className={css.sidebar}>

            <nav className={css.sidebarNav}>

                <ul className={css.list}>
                    {sidebarElements}
                </ul>
            </nav>
        </aside>
    );
});
