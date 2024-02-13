import React from 'react';
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import {required} from "../../../utils/validator/Validator";
import {Input} from "../../common/formsControlls/textarea/textarea";

export interface FormDataLogin {
    login: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: React.FC<InjectedFormProps<FormDataLogin>> = (props:InjectedFormProps<FormDataLogin>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                      validate={[required]} name={"login"} placeholder={"Логин"} />
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"password"} placeholder={"Пароль"} />
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"rememberMe"} type={"checkbox"} /> Запомнить меня
            </div>
            <div>
                <button type="submit">Войти</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormDataLogin, {}>({ form: "login" })(LoginForm);
