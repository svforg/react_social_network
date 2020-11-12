import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";

let posts = state.profile.posts;
let persons = state.dialogs.persons;
let messages  = state.dialogs.messages;

ReactDOM.render(<App posts={posts} persons={persons} messages={messages} />,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
