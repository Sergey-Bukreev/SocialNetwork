
import './index.css';
import store from "./redux/State"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

 let rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <App appState={state} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}



rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)