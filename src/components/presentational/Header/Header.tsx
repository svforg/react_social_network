import React from "react";
import css from './Header.module.scss';

export const Header: React.FC = () => {
    return <header className={css.header}>
        <div className="wrapper">
            <a className={css.logoLink}
               href="/"
               title="Our logo">

                <img className={css.logoImg}
                     src="https://vk.com/images/svg_icons/ic_head_logo.svg"
                     alt="Our logo"/>

                <span className={css.logoTxt}>
                    Social
                </span>
            </a>
        </div>
    </header>
};
