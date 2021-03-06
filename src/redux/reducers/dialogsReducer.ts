import {DialogsACType} from "../actions/dialogsActions";
import {DIALOGS_TYPES} from "../constats/dialogsConstats";

export type PersonsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    text: string
}
export type DialogsType = {
    persons: Array<PersonsType>
    messages: Array<MessagesType>
    messageText: string
}


let initialState = {
    persons: [
        {id: 1, name: "Slavbl4"},
        {id: 2, name: "Dimbl4"},
        {id: 3, name: "Svetbl4"},
        {id: 4, name: "Yambl4"},
    ],
    messages: [
        {id: 1, text: "hi from Slavbl4"},
        {id: 2, text: "hi from Dimbl4"},
        {id: 3, text: "hi from Svetbl4"},
        {id: 4, text: "hi from Yambl4"},
    ],
    messageText: "",
};

export const dialogsReducer = (state: DialogsType = initialState, action: DialogsACType): DialogsType => {

    switch (action.type) {

        case DIALOGS_TYPES.ADD_DIALOG_MESSAGE:
            return state.messageText
                ? {
                    ...state, messageText: "",
                    messages: [...state.messages, { id: 5, text: state.messageText }],
                  }
                : state;

        case DIALOGS_TYPES.ADD_DIALOG_MESSAGE_TEXT:
            return action.payload.messageText
                ? {...state, messageText: action.payload.messageText}
                : state;

        default:
            return state;
    }
};

const prepareString = (string: string) => string.replace(/\s+/g, ' ').trim();
