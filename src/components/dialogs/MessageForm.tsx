import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControlls/textarea/textarea";
import {maxLengthCreator, required, ValidationFunction} from "../../utils/validator/Validator";
export interface FormDataMessage  {
    messageBody:string
}
const  maxLength100:ValidationFunction = maxLengthCreator(100)
export const MessageForm:React.FC<InjectedFormProps<FormDataMessage>> = (props:InjectedFormProps<FormDataMessage>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"messageBody"} component={Textarea} validate={[required, maxLength100]} placeholder={"write your message"}/>
            <button >Send Message</button>

        </form>
    );
};
export const AddMessaageFormRedux = reduxForm<FormDataMessage, {}>({form:"Add Message Form"}) (MessageForm)
