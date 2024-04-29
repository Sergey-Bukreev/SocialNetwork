import React from 'react';
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import classes from "../../../components/formsControlls/FormControll.module.css"
import { required } from "../../../utils/Validator";
import { Input } from "../../../components/formsControlls/textarea/textarea";

export interface FormDataLogin {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string

}

interface LoginFormProps extends InjectedFormProps<FormDataLogin, { captchaUrl: string | null }> {captchaUrl: string | null;}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name="email" placeholder="email" />
            </div>
            <div>
                <Field component={Input} validate={[required]} name="password" placeholder="password" type="password" />
            </div>
            <div>
                <Field component={Input} validate={[required]} name="rememberMe" type="checkbox" /> Remember Me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field component={Input} name={"captcha"} placeholder={"Symbols from image"}/>}
            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            <div>
                <button type="submit">Войти</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormDataLogin, { captchaUrl: string | null }>({ form: "login" })(LoginForm);