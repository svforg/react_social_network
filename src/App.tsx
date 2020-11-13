import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Main} from "./components/Main/Main";
import {BrowserRouter} from "react-router-dom";


type PersonPropsType = {
    id: number
    name: string
}
type MessagePropsType = {
    text: string
}
type PostPropsType = {
    text: string
    like: number
}
type SidebarPropsType = {
    slug: string
    title: string
}
type AppPropsType = {
    posts: Array<PostPropsType>
    persons: Array<PersonPropsType>
    messages: Array<MessagePropsType>
    sidebarItems: Array<SidebarPropsType>
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Sidebar sidebarItems={props.sidebarItems} />
                <Main posts={props.posts} persons={props.persons} messages={props.messages}/>
            </div>
        </BrowserRouter>
    );
}

export default App;