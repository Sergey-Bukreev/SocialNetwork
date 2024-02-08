import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
export interface FormDataMessage  {
    messageBody:string
}
export const MessageForm:React.FC<InjectedFormProps<FormDataMessage>> = (props:InjectedFormProps<FormDataMessage>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"messageBody"} component={"textarea"} placeholder={"write your message"}/>
            <button >Send Message</button>

        </form>
    );
};
export const AddMessaageFormRedux = reduxForm<FormDataMessage, {}>({form:"Add Message Form"}) (MessageForm)
