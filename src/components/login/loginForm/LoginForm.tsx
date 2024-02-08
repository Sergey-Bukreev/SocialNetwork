import React from 'react';
import { Field, reduxForm, InjectedFormProps } from "redux-form";

export interface FormDataLogin {
    login: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: React.FC<InjectedFormProps<FormDataLogin>> = (props:InjectedFormProps<FormDataLogin>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} placeholder={"Логин"} />
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"Пароль"} />
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Запомнить меня
            </div>
            <div>
                <button type="submit">Войти</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormDataLogin, {}>({ form: "login" })(LoginForm);
