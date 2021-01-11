import React from "react";
import {connect} from "react-redux";
import {Sidebar} from "./Sidebar";

const mapStateToProps = (state: any) => {
    return {
        sidebar: state.sidebarReducer
    }
};

export const SidebarContainer: any = connect(mapStateToProps)(Sidebar);