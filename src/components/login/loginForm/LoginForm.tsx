import React from 'react';
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import {required} from "../../../utils/validator/Validator";
import {Input} from "../../common/formsControlls/textarea/textarea";

export interface FormDataLogin {
    email: string;
    password: string;
    rememberMe: boolean;
 }

const LoginForm: React.FC<InjectedFormProps<FormDataLogin>> = (props:InjectedFormProps<FormDataLogin>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                      validate={[required]} name={"email"} placeholder={"email"} />
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"password"} placeholder={"password"} type={"password"}/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"rememberMe"} type={"checkbox"} /> Remember Me
            </div>
            <div>
                <button type="submit">Войти</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormDataLogin, {}>({ form: "login" })(LoginForm);
