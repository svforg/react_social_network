import React from "react";
import css from './Header.module.scss';
import {AuthType} from "../../../redux/reducers/authReducer";
import {NavLink} from "react-router-dom";

type HeaderProps = AuthType;

export const Header: React.FC<HeaderProps> = React.memo(props => {

    const {
        id,
        email,
        login,
        isAuth
    } = props;

    return <header className={css.header}>
        <div className="wrapper">
            <div className={css.headerInner}>
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
                <div className={css.authBlock}>
                    {
                        isAuth
                            ? login
                            : <NavLink to={'/login'}>Sign in</NavLink>
                    }
                </div>
            </div>
        </div>
    </header>
});
