
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/Redux-Store";
import {Provider} from "react-redux";


 let rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <Provider store={store}>
        <App appState={state} dispatch={store.dispatch} />
        </Provider>,
        document.getElementById('root')
    );
}



rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})