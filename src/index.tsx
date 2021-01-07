import * as serviceWorker from './serviceWorker';
import React from 'react';
import './index.scss';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let reRenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>, document.getElementById('root')
    );
};

reRenderEntireTree();

store.subscribe(reRenderEntireTree);

serviceWorker.unregister();
