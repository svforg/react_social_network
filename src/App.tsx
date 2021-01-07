import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {SidebarContainer} from "./components/Sidebar/SidebarContainer";

const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            <Header/>

            <SidebarContainer/>

            <Main/>
        </div>
    );
};

export default App;