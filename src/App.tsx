import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import { RotState} from "./redux/Redux-Store";
import {Action, Dispatch} from "redux";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import {ProfileContainer} from "./components/profile/ProfileContainer";




export type StatePropsType ={ appState: RotState, dispatch:Dispatch<Action> }

const App = (props:StatePropsType) => {

  return (
   <BrowserRouter>
       <div className="app-wrapper">
           <Header />
           <Navbar />
           <div className="app-wrapper-content">
               <Route render = {() => <DialogsContainer  />} path={"/dialogs"} />
               <Route render = {() => <ProfileContainer />} path={"/profile/:userId"} />
               <Route render = {() => <UsersContainer />} path={"/users"} />
           </div>
       </div>
   </BrowserRouter>
  );
}





export default App;
