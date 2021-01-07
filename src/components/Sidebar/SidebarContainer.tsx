import React from "react";
import {SidebarType} from "../../redux/actions/sidebarActions";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {Sidebar} from "./Sidebar";

export const SidebarContainer: React.FC = () => {
    const sidebar = useSelector<AppStoreType, Array<SidebarType>>(state => state.sidebar);

    return (
        <Sidebar
            sidebar={sidebar}/>
    );
};
