import React from 'react';
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import classes from "../../../components/formsControlls/FormControll.module.css"
import { required } from "../../../utils/Validator";
import { Input } from "../../../components/formsControlls/textarea/textarea";
import classes2 from "./../Login.module.css"

export interface FormDataLogin {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string

}

interface LoginFormProps extends InjectedFormProps<FormDataLogin, { captchaUrl: string | null }> {captchaUrl: string | null;}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes2.loginForm}>

            <div className={classes2.loginCheckboxWrapper}>
                <Field component={Input} validate={[required]} name="email" placeholder="email" className={classes2.loginInput} />
            </div>



            <div className={classes2.loginCheckboxWrapper}>
                <Field component={Input} validate={[required]} name="password" placeholder="password" type="password" className={classes2.loginInput} />
            </div>

                <div className={classes2.loginCheckboxWrapper}>
                    <Field component={Input} validate={[required]} name="rememberMe" type="checkbox" className={classes2.loginCheckbox}/>
                    <label htmlFor="rememberMe" className={classes2.loginCheckboxLabel}> Remember Me</label>
                </div>


            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field component={Input} name={"captcha"} placeholder={"Symbols from image"} className={classes2.loginInput}/>}
            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            <div>
                <button type="submit" className={classes2.loginButton}>Войти</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormDataLogin, { captchaUrl: string | null }>({ form: "login" })(LoginForm);