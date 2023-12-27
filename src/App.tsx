import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import { RotState} from "./redux/Redux-Store";
import {Action} from "redux";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";


export type StatePropsType ={ appState: RotState, dispatch:(action: Action) => void}

const App = (props:StatePropsType) => {
    console.log(props.appState.profilePage)
  return (
   <BrowserRouter>
       <div className="app-wrapper">
           <Header />
           <Navbar />
           <div className="app-wrapper-content">
               <Route render = {() => <DialogsContainer dialogsPage={props.appState.dialogPage} dispatch={props.dispatch} />} path={"/dialogs"} />
               <Route render = {() => <Profile  dispatch={props.dispatch}  profilePage={props.appState.profilePage} />} path={"/profile"} />

           </div>
       </div>
   </BrowserRouter>
  );
}





export default App;
