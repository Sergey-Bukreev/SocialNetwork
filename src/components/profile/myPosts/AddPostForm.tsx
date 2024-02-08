import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
export interface FormDataPost {
    postBody:string
}

export const PostForm:React.FC<InjectedFormProps<FormDataPost>> = (props:InjectedFormProps<FormDataPost>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"postBody"} component={"textarea"}  placeholder={"Write your text"}/>
            </div>
            <div>
                <button type={"submit"}>Add Post</button>
            </div>
        </form>
    );
};
export const AddPostForm = reduxForm<FormDataPost, {}>({form:"Add Post Form"})(PostForm)

