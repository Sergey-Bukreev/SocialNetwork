import React from 'react';
import { ReduxLoginForm, FormDataLogin } from './loginForm/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import {RotState} from "../../redux/Redux-Store";


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
    isAuth: state.auth.isAuth,
    authorizedUserID: state.auth.userId
});

export default connect(mapStateToProps, { login })(Login);
