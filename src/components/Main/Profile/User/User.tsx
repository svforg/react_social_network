import React from "react";
import css from './User.module.css';

export function User(props: any) {
    return (
        <div className={css.user}>
            <div className={css.backgroundWrapper}>
                <img className={css.background}
                     src="https://iqonic.design/themes/socialv/html-dark/images/page-img/profile-bg1.jpg"
                     alt="Bni Cyst bg" />
            </div>

            <figure className={css.info}>
                <div className={css.avatarWrapper}>
                    <img className={css.avatar}
                         src="https://iqonic.design/themes/socialv/html-dark/images/user/11.png"
                         alt="Bni Cyst ava"  />
                </div>

                <figcaption className={css.caption}>
                    Bni Cyst
                </figcaption>
            </figure>
        </div>
    );
}