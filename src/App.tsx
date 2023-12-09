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

type AppPropsType = {
    posts: Array<PostPropsType>
    dialogData: Array<DialogItemPropsType>
    messageData: Array<MessagePropsType>
}
const App = (props:AppPropsType) => {
  return (
   <BrowserRouter>
       <div className="app-wrapper">
           <Header />
           <Navbar />
           <div className="app-wrapper-content">
               <Route render = {() => <Dialogs dialogData={props.dialogData} messageData={props.messageData}/>} path={"/dialogs"} />
               <Route render = {() => <Profile posts={props.posts}/>} path={"/profile"} />

           </div>




       </div>
   </BrowserRouter>
  );
}





export default App;
