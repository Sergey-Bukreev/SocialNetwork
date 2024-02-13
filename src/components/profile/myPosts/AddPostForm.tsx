import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required, ValidationFunction} from "../../../utils/validator/Validator";
import {Textarea} from "../../common/formsControlls/textarea/textarea";
export interface FormDataPost {
    postBody:string
}
    const maxLength10:ValidationFunction = maxLengthCreator(10)
export const PostForm:React.FC<InjectedFormProps<FormDataPost>> = (props:InjectedFormProps<FormDataPost>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"postBody"} component={Textarea}  placeholder={"Write your text"} validate={[required, maxLength10 ]}/>
            </div>
            <div>
                <button type={"submit"}>Add Post</button>
            </div>
        </form>
    );
};
export const AddPostForm = reduxForm<FormDataPost, {}>({form:"Add Post Form"})(PostForm)

