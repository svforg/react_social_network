import React, {ChangeEvent} from "react";
import css from "./CreatePost.module.scss";
import {CustomTextArea} from "../../../ui-elements/CustomTextArea/CustomTextArea";
import {CustomButton} from "../../../ui-elements/CustomButton/CustomButton";

type CreatePostType = {
    state: string
    addProfilePost: () => void
    addProfilePostText: (title: string) => void
}

const CreatePostMemo: React.FC<CreatePostType> = (
    {
        state,
        addProfilePost,
        addProfilePostText,
    }
) => {
    const buttonClickCallback = () => addProfilePost();
    const textAreaChangeCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        addProfilePostText(e.currentTarget.value)
    };

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
                Add post
            </CustomButton>
        </form>
    );
};

export const CreatePost = React.memo(CreatePostMemo);
