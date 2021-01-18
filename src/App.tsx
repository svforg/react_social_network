import React from 'react';
import './App.scss';
import {Header} from "./components/presentational/Header/Header";
import {Main} from "./components/presentational/Main/Main";

export const App: React.FC = () => {

    return <div className="app-inner">
        <Header/>

        <div className="wrapper">
            <Main/>
        </div>
    </div>
};
