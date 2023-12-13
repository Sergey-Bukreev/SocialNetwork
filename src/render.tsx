import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/State"

export let rerenderEntireTree = (State:any) => {
    ReactDOM.render(
        <App appState={State}  addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
