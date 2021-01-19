import React from 'react';
import {Route} from "react-router";
import HeaderContainer from "./components/containers/Header/HeaderContainer";
import {SidebarContainer} from "./components/containers/Sidebar/SidebarContainer";
import ProfileContainer from "./components/containers/Profile/ProfileContainer";
import {DialogsContainer} from "./components/containers/Dialogs/DialogsContainer";
import UsersContainer from "./components/containers/Users/UsersContainer";
import css from './App.module.scss';

export const App: React.FC = () => {

    return <div className="app-inner">
        <HeaderContainer/>

        <div className="wrapper">

            <main className={css.main}>
                <SidebarContainer/>

                <div className={css.content}>
                    <Route path="/profile/:userId"
                           render={() =>
                               <ProfileContainer/>
                           }/>

                    <Route path="/dialogs"
                           render={() =>
                               <DialogsContainer/>
                           }/>

                    <Route path="/users"
                           render={() =>
                               <UsersContainer/>
                           }/>
                </div>
            </main>
        </div>
    </div>
};
