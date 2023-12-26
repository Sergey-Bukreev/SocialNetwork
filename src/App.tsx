import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import { RotState, store} from "./redux/Redux-Store";
import {Action} from "redux";




export type StatePropsType ={ appState: RotState, dispatch:(action: Action) => void}

const App = (props:StatePropsType) => {
    console.log(props.appState.profilePage)
  return (
   <BrowserRouter>
       <div className="app-wrapper">
           <Header />
           <Navbar />
           <div className="app-wrapper-content">
               <Route render = {() => <Dialogs dialogData={props.appState.dialogPage.dialogsData} messageData={props.appState.dialogPage.messageData} dispatch={props.dispatch} newMessageText={props.appState.dialogPage.newMessageText}/>} path={"/dialogs"} />
               <Route render = {() => <Profile posts={props.appState.profilePage.postsData} dispatch={props.dispatch} newPostText={props.appState.profilePage.newPostText}  />} path={"/profile"} />

           </div>
       </div>
   </BrowserRouter>
  );
}





export default App;
