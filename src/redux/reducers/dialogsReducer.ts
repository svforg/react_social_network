import {ADD_DIALOG_MESSAGE, ADD_DIALOG_MESSAGE_TEXT} from "../constants/dialogsConstants";
import {ActionDialogsType} from "../actions/dialogsActions";

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

export const dialogsReducer = (state: DialogsType = initialState, action: ActionDialogsType): DialogsType => {

    let prepareString = (string: string) => string.replace(/\s+/g, ' ').trim();

    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            if (prepareString(state.messageText) !== "") {
                let newMessage: MessagesType = {
                    id: 5,
                    text: state.messageText,
                };
                state.messages.push(newMessage);
                state.messageText = "";
                return {...state};
            }
            break;

        case ADD_DIALOG_MESSAGE_TEXT:
            if (prepareString(action.messageText) !== "") {
                state.messageText = action.messageText;
                return {...state};
            }

            break;
    }

    return state;
};

