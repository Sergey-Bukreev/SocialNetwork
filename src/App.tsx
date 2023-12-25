import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile, ProfilePropsType} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostPropsType} from "./components/profile/myPosts/Post/Post";
import {DialogItemPropsType} from "./components/dialogs/dialogItem/DialogItem";
import {MessagePropsType} from "./components/dialogs/Message/Message";
import {Action} from "./redux/State";



export type StatePropsType ={
    appState: AppPropsType
    dispatch:(action: Action) => void


}

type AppPropsType = {
    postsData: Array<PostPropsType>
    dialogsData: Array<DialogItemPropsType>
    messageData: Array<MessagePropsType>
    newPostText:string
    newMessageText:string


}

const App = (props:StatePropsType) => {
  return (
   <BrowserRouter>
       <div className="app-wrapper">
           <Header />
           <Navbar />
           <div className="app-wrapper-content">
               <Route render = {() => <Dialogs dialogData={props.appState.dialogsData} messageData={props.appState.messageData} dispatch={props.dispatch} newMessageText={props.appState.newMessageText}/>} path={"/dialogs"} />
               <Route render = {() => <Profile posts={props.appState.postsData} dispatch={props.dispatch} newPostText={props.appState.newPostText}  />} path={"/profile"} />

           </div>
       </div>
   </BrowserRouter>
  );
}





export default App;
