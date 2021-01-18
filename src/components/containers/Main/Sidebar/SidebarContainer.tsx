import React from "react";
import {Sidebar} from "../../../presentational/Main/Sidebar/Sidebar";

export const SidebarContainer: React.FC = () => {

    const sidebar = [
        {slug: "/profile", title: "Profile"},
        {slug: "/dialogs", title: "Dialogs"},
        {slug: "/users", title: "Users"},
    ];

    return <Sidebar sidebar={sidebar}/>
};
