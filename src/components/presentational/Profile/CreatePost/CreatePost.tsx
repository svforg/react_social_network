import React, {ChangeEvent} from "react";
import css from "./CreatePost.module.scss";
import {CustomTextArea} from "../../../shared/CustomTextArea/CustomTextArea";
import {CustomButton} from "../../../shared/CustomButton/CustomButton";

type CreatePostType = {
    postText: string
    addProfilePost: () => void
    addProfilePostText: (title: string) => void
}

export const CreatePost: React.FC<CreatePostType> = React.memo(props => {

    const {
        postText,
        addProfilePost,
        addProfilePostText,
    } = props;

    const buttonClickCallback = () => addProfilePost();
    const textAreaChangeCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => addProfilePostText(e.currentTarget.value);

    return <form className={css.form}>
        <h4 className="form-title">Create Post</h4>

        <CustomTextArea value={postText}
                        onChange={textAreaChangeCallBack}
                        label="Enter post message"/>

        <CustomButton onClick={buttonClickCallback}
                      type="button">
            Add post
        </CustomButton>
    </form>
});
