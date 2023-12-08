import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
       <div className="app-wrapper">
           <Header />
           <Navbar />
           <div className="app-wrapper-content">
               <Route component={Dialogs} path={"/dialogs"}/>
               <Route component={Profile} path={"/profile"}/>

           </div>




       </div>
   </BrowserRouter>
  );
}





export default App;
