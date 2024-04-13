import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import { Route} from "react-router-dom";
import {HeaderContainer} from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {RotState} from "./redux/Redux-Store";
import {initializeAPP} from "./redux/app-reducer/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";
const DialogsContainer = React.lazy(()=>import("./components/dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"))
const UsersContainer = React.lazy(()=> import("./components/users/UsersContainer"))

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
                        <React.Suspense fallback={<Preloader/>}>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/profile/:userId" render={() => <ProfileContainer/>}/>
                            <Route render={() => <UsersContainer/>} path={"/users"}/>
                        </React.Suspense>
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


