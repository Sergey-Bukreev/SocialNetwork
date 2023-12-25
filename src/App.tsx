import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Action, State} from "./redux/State";



export type StatePropsType ={ appState: State, dispatch:(action: Action) => void }

const App = (props:StatePropsType) => {
  return (
   <BrowserRouter>
       <div className="app-wrapper">
           <Header />
           <Navbar />
           <div className="app-wrapper-content">
               <Route render = {() => <Dialogs dialogData={props.appState.dialogState.dialogsData} messageData={props.appState.dialogState.messageData} dispatch={props.dispatch} newMessageText={props.appState.dialogState.newMessageText}/>} path={"/dialogs"} />
               <Route render = {() => <Profile posts={props.appState.profileState.postsData} dispatch={props.dispatch} newPostText={props.appState.profileState.newPostText}  />} path={"/profile"} />

           </div>
       </div>
   </BrowserRouter>
  );
}





export default App;
