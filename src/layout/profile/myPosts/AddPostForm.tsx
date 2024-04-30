import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required, ValidationFunction} from "../../../utils/Validator";
import {Textarea} from "../../../components/formsControlls/textarea/textarea";
import classes from "./MyPosts.module.css"
export interface FormDataPost {
    postBody:string
}
    const maxLength100:ValidationFunction = maxLengthCreator(100)
export const PostForm:React.FC<InjectedFormProps<FormDataPost>> = (props:InjectedFormProps<FormDataPost>) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <div className={classes.inputWrapper}>
                <Field className={classes.postField} name={"postBody"} component={Textarea}  placeholder={"Write your text"} validate={[required, maxLength100 ]}/>
            </div>
            <div>
                <button type={"submit"} className={classes.addPostButton}>Add Post</button>
            </div>
        </form>
    );
};
export const AddPostForm = reduxForm<FormDataPost, {}>({form:"Add Post Form"})(PostForm)

