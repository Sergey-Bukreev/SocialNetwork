import React from 'react';
import { ReduxLoginForm, FormDataLogin } from './loginForm/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer/auth-reducer';
import { Redirect } from 'react-router-dom';
import {RotState} from "../../redux/Redux-Store";
import {getAuthorizedUserID, getCaptchaUrl, getIsAuth} from "../../redux/selectors/auth-seletor";
import classes from "./Login.module.css"


export interface LoginProps {
    isAuth: boolean;
    login: (email: string, password: string, rememberMe: boolean, captcha:string) => void;
    authorizedUserID:any
    captchaUrl:string | null
}

const Login: React.FC<LoginProps> = (props:LoginProps) => {
    const onSubmit = (formData: FormDataLogin) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.authorizedUserID}`} />;
    }

    return (
        <div className={classes.loginContainer}>

            <div className={classes.loginFormWrapper}>
                <h2 className={classes.loginTitle}>LOGIN</h2>
                <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            </div>
        </div>
    );
};

const mapStateToProps = (state: RotState) => ({
    isAuth: getIsAuth(state),
    authorizedUserID: getAuthorizedUserID(state),
    captchaUrl: getCaptchaUrl(state)
});

export default connect(mapStateToProps, { login })(Login);
