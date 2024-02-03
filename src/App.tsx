import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import { RotState} from "./redux/Redux-Store";
import {Action, Dispatch} from "redux";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import {ProfileContainer} from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";




export type StatePropsType ={ appState: RotState, dispatch:Dispatch<Action> }

const App = (props:StatePropsType) => {

  return (
   <BrowserRouter>
       <div className="app-wrapper">
           <HeaderContainer/>
           <Navbar />
           <div className="app-wrapper-content">
               <Route render = {() => <DialogsContainer  />} path={"/dialogs"} />
               <Route render = {() => <ProfileContainer />} path={"/profile/:userId"} />
               <Route render = {() => <UsersContainer />} path={"/users"} />
               <Route render = {() => <Login />} path={"/login"} />
           </div>
       </div>
   </BrowserRouter>
  );
}





export default App;
