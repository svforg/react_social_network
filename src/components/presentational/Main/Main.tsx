import React from "react";
import css from './Main.module.scss';
import {Route} from "react-router-dom";
import {DialogsContainer} from "../../containers/Main/Dialogs/DialogsContainer";
import {SidebarContainer} from "../../containers/Main/Sidebar/SidebarContainer";
import ProfileContainer from "../../containers/Main/Profile/ProfileContainer";
import UsersContainer from "../../containers/Main/Users/UsersContainer";

export const Main: React.FC = () => {

    return  <main className={css.main}>
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
};

