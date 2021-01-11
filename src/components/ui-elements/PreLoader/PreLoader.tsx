import React from 'react';
import css from "./PreLoader.module.scss";


const PreLoaderMemo: React.FC = (
    {
        ...restProps
    }
) => {

    return (
        <div className={css.preLoaderCubic}  />
    );
};

export const PreLoader = React.memo(PreLoaderMemo);
