import React from "react";
import css from './Main.module.scss';
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {ProfileContainer} from "./Profile/ProfileContainer";

export const Main: React.FC = () => {
    return (
        <main className={css.main}>

            <Route path="/profile"
                   render={() =>
                       <ProfileContainer/>
                   }/>

            <Route path="/dialogs"
                   render={() =>
                       <DialogsContainer/>
                   }/>

            <Route path="/news"
                   render={() => <News/>}/>

            <Route path="/music"
                   render={() => <Music/>}/>

            <Route path="/settings"
                   render={() => <Settings/>}/>
        </main>
    );
};
