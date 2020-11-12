import React from "react";
import css from './Main.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";


type PersonPropsType = {
    id: number,
    name: string,
}
type MessagePropsType = {
    text: string,
}
type PostPropsType = {
    text: string,
    like: number,
}
type MainPropsType = {
    posts: Array<PostPropsType>,
    persons: Array<PersonPropsType>,
    messages: Array<MessagePropsType>,
}
export function Main(props: MainPropsType) {
    return (
        <BrowserRouter>
            <main className={css.main}>
                <Route path="/dialogs" render={ () =>
                    <Dialogs persons={props.persons} messages={props.messages} /> }/>

                <Route path="/dialogs" render={ () =>
                    <Profile posts={props.posts} /> }/>

                <Route path="/dialogs" render={ () => <News /> }/>
                <Route path="/dialogs" render={ () => <Music /> }/>
                <Route path="/dialogs" render={ () => <Settings /> }/>
            </main>
        </BrowserRouter>
    );
}