import React from 'react';
import './App.scss';
import {Main} from "./components/presentational/Main/Main";
import HeaderContainer from "./components/containers/Header/HeaderContainer";

export const App: React.FC = () => {

    return <div className="app-inner">
        <HeaderContainer/>

        <div className="wrapper">
            <Main/>
        </div>
    </div>
};
