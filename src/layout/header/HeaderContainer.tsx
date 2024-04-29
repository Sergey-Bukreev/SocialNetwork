import React from "react";
import {Header} from "./Header";
import { logout} from "../../redux/auth-reducer/auth-reducer";
import {connect} from "react-redux";
import {RotState} from "../../redux/Redux-Store";
import {getAccountPhoto, getFullUserName} from "../../redux/selectors/profile-selectors";


export class HeaderContainerComponent extends React.Component<any, any> {


    render() {
        const { isAuth, login, logout, photo, fullUserName} = this.props;
        return <Header isAuth={isAuth} login={login} logout={logout} photo={photo} fullUserName={fullUserName}/>;
    }
}
const mapStateToProps = (state:RotState) => {
    return {
        isAuth:state.auth.isAuth,
        login: state.auth.login,
        photo:getAccountPhoto(state),
        fullUserName:getFullUserName(state)
    }
}
export const HeaderContainer = connect (mapStateToProps, { logout})(HeaderContainerComponent)