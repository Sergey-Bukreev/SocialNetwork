import React from "react";
import {Header} from "./Header";
import {getAuthUserdata, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RotState} from "../../redux/Redux-Store";


export class HeaderContainerComponent extends React.Component<any, any> {

    componentDidMount() {
        this.props.getAuthUserdata()
    }
    render() {
        const { isAuth, login, logout } = this.props;
        return <Header isAuth={isAuth} login={login} logout={logout} />;
    }
}
const mapStateToProps = (state:RotState) => {
    return {
        isAuth:state.auth.isAuth,
        login: state.auth.login
    }
}
export const HeaderContainer = connect (mapStateToProps, {getAuthUserdata, logout})(HeaderContainerComponent)