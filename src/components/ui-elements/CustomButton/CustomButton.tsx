import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import css from "./CustomButton.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const CustomButtonMemo: React.FC<DefaultButtonPropsType> = (
    {
        ...restProps
    }
) => {
    const btnClassName = `${css.button} ${css.button_filled}`;

    return (
        <button className={btnClassName} {...restProps} />
    );
};

export const CustomButton = React.memo(CustomButtonMemo);
