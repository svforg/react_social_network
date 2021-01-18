import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import './index.scss';

let reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
};

reRenderEntireTree();

store.subscribe(reRenderEntireTree);

serviceWorker.unregister();
