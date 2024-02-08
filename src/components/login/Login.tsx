import React from 'react';
import { ReduxLoginForm, FormDataLogin} from "./loginForm/LoginForm";
import {SubmitHandler} from "redux-form";


export const Login = () => {
    const onSubmit:SubmitHandler<FormDataLogin> = (values)=> {
        console.log(values)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

