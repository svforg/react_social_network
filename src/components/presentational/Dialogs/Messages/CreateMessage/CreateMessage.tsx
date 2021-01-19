import React, {ChangeEvent} from "react";
import css from "./CreateMessage.module.scss";
import {CustomTextArea} from "../../../../shared/CustomTextArea/CustomTextArea";
import {CustomButton} from "../../../../shared/CustomButton/CustomButton";

type CreateMessageType = {
    messageText: string
    addDialogMessage: () => void
    addDialogMessageText: (messageText: string) => void
}

export const CreateMessage: React.FC<CreateMessageType> = React.memo(props => {

    const {
        messageText,
        addDialogMessage,
        addDialogMessageText,
    } = props;

    const buttonClickCallback = () => addDialogMessage();
    const textAreaChangeCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => addDialogMessageText(e.currentTarget.value);

    return <form className={css.form}>
        <h4 className="form-title">Create Post</h4>

        <CustomTextArea value={messageText}
                        onChange={textAreaChangeCallBack}
                        label="Enter post message"/>

        <CustomButton onClick={buttonClickCallback}
                      type="button">
            Add message
        </CustomButton>
    </form>
});
