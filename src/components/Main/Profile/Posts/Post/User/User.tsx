import React from "react";
import css from './User.module.scss';

export const User: React.FC = () => {
    return (
        <div className={css.user}>

            <div className={css.ava}>

                <img className={css.pic}
                     src="https://iqonic.design/themes/socialv/html-dark/images/user/01.jpg"
                     alt=""/>
            </div>

            <h5 className={css.name}>
                Anna Sthesia
            </h5>
        </div>
    );
};
