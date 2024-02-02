import React from "react";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RotState} from "../../redux/Redux-Store";
import {AuthAPI} from "../../api/api";

export class HeaderContainerComponent extends React.Component<any, any> {

    componentDidMount() {
        AuthAPI.me().then(response => {
            let {id, email, login} = response.data.data
            if(response.data.resultCode === 0) {this.props.setAuthUserData(id, email, login)}
        })

    }
    render() {
        const { isAuth, login } = this.props;

        return <Header isAuth={isAuth} login={login} />;
    }
}
const mapStateToProps = (state:RotState) => {
    return {
        isAuth:state.auth.isAuth,
        login: state.auth.login
    }
}
export const HeaderContainer = connect (mapStateToProps, {setAuthUserData})(HeaderContainerComponent)