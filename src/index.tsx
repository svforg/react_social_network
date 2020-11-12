import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";


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

let posts : Array<PostPropsType> = state.profile.posts;
let persons : Array<PersonPropsType> = state.dialogs.persons;
let messages : Array<MessagePropsType> = state.dialogs.messages;


ReactDOM.render(<App posts={posts} persons={persons} messages={messages} />,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
