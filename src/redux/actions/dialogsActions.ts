import {DIALOGS_TYPES} from "../constats/dialogsConstats";

export type DialogsACType =
    ReturnType<typeof addDialogMessageAC>
    | ReturnType<typeof addDialogMessageTextAC>

export const addDialogMessageAC = () => ({
    type: DIALOGS_TYPES.ADD_DIALOG_MESSAGE
} as const);
export const addDialogMessageTextAC = (messageText: string) => ({
    type: DIALOGS_TYPES.ADD_DIALOG_MESSAGE_TEXT,
    payload: {messageText}
} as const);
