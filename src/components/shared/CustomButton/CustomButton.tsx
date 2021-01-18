import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import css from "./CustomButton.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const CustomButton: React.FC<DefaultButtonPropsType> = React.memo(props => {

    const  {...restProps} = props;

    const btnClassName = `${css.button} ${css.button_filled}`;

    return <button className={btnClassName} {...restProps}/>
});
