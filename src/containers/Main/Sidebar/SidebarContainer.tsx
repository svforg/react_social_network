import React from "react";
import {useSelector} from "react-redux";
import {Sidebar} from "../../../components/Main/Sidebar/Sidebar";
import {selectSidebar} from "../../../redux/selectors/sidebarSelectors";

export const SidebarContainer: React.FC = () => {
    const sidebar = useSelector(selectSidebar);

    return <Sidebar sidebar={sidebar}/>
};

