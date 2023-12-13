import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/State"

export let rerenderEntireTree = (State:any) => {
    ReactDOM.render(
        <App appState={State}  addPost={addPost}/>,
        document.getElementById('root')
    );
}
