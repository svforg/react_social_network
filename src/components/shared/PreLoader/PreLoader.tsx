import React from 'react';
import css from "./PreLoader.module.scss";

export const PreLoader: React.FC = React.memo(props => {

    const  {...restProps} = props;

    return <div className={css.preLoaderCubic} {...restProps}/>
});
