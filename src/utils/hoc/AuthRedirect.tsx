import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RotState} from "../../redux/Redux-Store";
type MapStateToPropsType = {
    isAuth:boolean
}
const mapStateToProps= (state:RotState) : MapStateToPropsType => {
    return {isAuth: state.auth.isAuth}
}
export function AuthRedirect  <P>(Component:ComponentType<P>)  {

    const RedirectComponent = (props:MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return  <Redirect to={"/login"}/>;

        return <Component {...restProps as P}/>
    }
    let ConnectedRedirectComponent = connect (mapStateToProps) (RedirectComponent)
    return ConnectedRedirectComponent
}