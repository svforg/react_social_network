import {ADD_DIALOG_MESSAGE, ADD_DIALOG_MESSAGE_TEXT} from "../constants/dialogsConstants";

export type ActionDialogsType =
    ReturnType<typeof addDialogMessageAC>
    | ReturnType<typeof addDialogMessageTextAC>


export const addDialogMessageAC = () => ({
    type: ADD_DIALOG_MESSAGE
} as const);
export const addDialogMessageTextAC = (messageText: string) => ({
    type: ADD_DIALOG_MESSAGE_TEXT,
    messageText: messageText,
} as const);
