
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/Redux-Store";


 let rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <App appState={state} dispatch={store.dispatch} />,
        document.getElementById('root')
    );
}



rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})