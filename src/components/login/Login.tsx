import React from 'react';
import { ReduxLoginForm, FormDataLogin } from './loginForm/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer/auth-reducer';
import { Redirect } from 'react-router-dom';
import {RotState} from "../../redux/Redux-Store";
import {getAuthorizedUserID, getIsAuth} from "../../redux/selectors/auth-seletor";


interface LoginProps {
    isAuth: boolean;
    login: (email: string, password: string, rememberMe: boolean) => void;
    authorizedUserID:any
}

const Login: React.FC<LoginProps> = (props:LoginProps) => {
    const onSubmit = (formData: FormDataLogin) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.authorizedUserID}`} />;
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state: RotState) => ({
    isAuth: getIsAuth(state),
    authorizedUserID: getAuthorizedUserID(state)
});

export default connect(mapStateToProps, { login })(Login);
