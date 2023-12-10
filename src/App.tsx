import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostPropsType} from "./components/profile/myPosts/Post/Post";
import {DialogItemPropsType} from "./components/dialogs/dialogItem/DialogItem";
import {MessagePropsType} from "./components/dialogs/Message/Message";
type StatePropsType ={
    appState: AppPropsType
}

type AppPropsType = {
    postsData: Array<PostPropsType>
    dialogsData: Array<DialogItemPropsType>
    messageData: Array<MessagePropsType>
}

const App = (props:StatePropsType) => {
  return (
   <BrowserRouter>
       <div className="app-wrapper">
           <Header />
           <Navbar />
           <div className="app-wrapper-content">
               <Route render = {() => <Dialogs dialogData={props.appState.dialogsData} messageData={props.appState.messageData}/>} path={"/dialogs"} />
               <Route render = {() => <Profile posts={props.appState.postsData}/>} path={"/profile"} />

           </div>
       </div>
   </BrowserRouter>
  );
}





export default App;
