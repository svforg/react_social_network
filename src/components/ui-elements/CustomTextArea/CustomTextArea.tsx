import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import css from "./CustomTextArea.module.scss";

type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    label: string
}

const CustomTextAreaMemo: React.FC<DefaultTextAreaPropsType> = (
    {
        label,
        ...restProps
    }
) => {
    return (
        <div className={css.formGroup}>

            <label className={css.label}>

                <span className={css.labelTitle}>{label}</span>

                <textarea className={css.inputField} {...restProps} />
            </label>
        </div>
    );
};

export const CustomTextArea = React.memo(CustomTextAreaMemo);