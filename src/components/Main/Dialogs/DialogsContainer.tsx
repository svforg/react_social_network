import React from "react";
import {connect} from "react-redux";
import {addDialogMessageAC, addDialogMessageTextAC} from "../../../redux/actions/dialogsActions";
import {Dialogs} from "./Dialogs";

const mapStateToProps = (state: any): any => {
    return {
        dialogs: state.dialogsReducer
    }
};
const mapDispatchToProps = (dispatch: any): any => {
    return {
        addDialogMessage: () => dispatch(addDialogMessageAC()),
        addDialogMessageText: (title: string) => dispatch(addDialogMessageTextAC(title)),
    }
};

export const DialogsContainer: any = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
