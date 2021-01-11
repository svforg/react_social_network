import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

const App: React.FC = () => {

    return (
        <div className="app-inner">
            <Header/>

            <div className="wrapper">
                <Main/>
            </div>
        </div>
    );
};

export default App;