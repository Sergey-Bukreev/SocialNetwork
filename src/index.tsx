
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store} from "./redux/Redux-Store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ComponentWithConnect from "./App";



    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
            <ComponentWithConnect />
        </Provider></BrowserRouter>,
        document.getElementById('root')
    );




