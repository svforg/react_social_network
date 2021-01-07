import React, {ChangeEvent} from "react";
import css from "./CreateMessage.module.scss";
import {CustomTextArea} from "../../../../ui-elements/CustomTextArea/CustomTextArea";
import {CustomButton} from "../../../../ui-elements/CustomButton/CustomButton";

type CreateMessageType = {
    state: string
    addDialogMessage: () => void
    addDialogMessageText: (messageText: string) => void
}

const CreateMessageMemo: React.FC<CreateMessageType> = (
    {
        state,
        addDialogMessage,
        addDialogMessageText,
    }
) => {
    const buttonClickCallback = () => addDialogMessage();
    const textAreaChangeCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => addDialogMessageText(e.currentTarget.value);

    return (
        <form className={css.form}>
            <h4 className="form-title">Create Post</h4>

            <CustomTextArea
                value={state}
                onChange={textAreaChangeCallBack}
                label="Enter post message"/>

            <CustomButton
                onClick={buttonClickCallback}
                type="button"
            >
                Add message
            </CustomButton>
        </form>
    );
};

export const CreateMessage = React.memo(CreateMessageMemo);
