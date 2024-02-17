import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import { Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {RotState} from "./redux/Redux-Store";
import {initializeAPP} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";



export type StatePropsType = MapStateToPropsType & {  initializeAPP: ()=>void   }

class App extends React.Component<StatePropsType, {}> {
    componentDidMount() {
        this.props.initializeAPP()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route render={() => <DialogsContainer/>} path={"/dialogs"}/>
                        <Route render={() => <ProfileContainer/>} path={"/profile/:userId"}/>
                        <Route render={() => <UsersContainer/>} path={"/users"}/>
                        <Route render={() => <Login/>} path={"/login"}/>
                    </div>
                </div>

        );
    }
}
const mapStateToProps = (state:RotState)=>({
    initialized: state.app.initialized
})
type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const ComponentWithConnect = connect(mapStateToProps, {initializeAPP})(App)

export default ComponentWithConnect


