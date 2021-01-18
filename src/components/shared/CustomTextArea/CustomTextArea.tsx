import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import css from "./CustomTextArea.module.scss";

type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    label?: string
}

export const CustomTextArea: React.FC<DefaultTextAreaPropsType> = React.memo(props => {

    const {
        label,
        ...restProps
    } = props;

    return <div className={css.formGroup}>
        <label className={css.label}>
            <span className={css.labelTitle}>{label}</span>

            <textarea className={css.inputField} {...restProps} />
        </label>
    </div>
});