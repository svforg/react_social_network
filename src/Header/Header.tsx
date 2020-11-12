import React from "react";
import css from './Header.module.css';

export function Header() {
    return (
        <header className={css.header}>

            <a className={css.logoLink}
               href="/"
               title="Our logo">

                <img className={css.logoImg}
                     src="https://vk.com/images/svg_icons/ic_head_logo.svg"
                     alt="Our logo"/>
            </a>
        </header>
    );
}