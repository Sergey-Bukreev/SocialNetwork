import React from 'react';

import {Input, Textarea} from "../../../../components/formsControlls/textarea/textarea";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { UserProfileType} from "../../../../redux/profile-reducer/profileReducer";
import classes from "../../../../components/formsControlls/FormControll.module.css";








export const ProfileDataForm:React.FC<InjectedFormProps<UserProfileType>> = (props:InjectedFormProps<UserProfileType>) => {
    const { handleSubmit,error } = props;
    return (
        <form onSubmit={handleSubmit} className={classes.formContainer}>

            {error && <div className={classes.formSummaryError}>{error}</div>}

            <div className={classes.formControl}>
                <b>Full Name: </b>
                {<Field component={Input} name={"fullName"} placeholder={"Full Name"} className={classes.inputField}/>}
            </div>
            <div className={classes.formControl}>
                <b>Looking for a job: </b>
                {<Field component={Input} name={"lookingForAJob"} type={"checkbox"} className={classes.inputField}/> }
            </div>
            <div className={classes.formControl}>
                <b>My Professional Skills: </b>
                {<Field component={Textarea} name={"lookingForAJobDescription"} placeholder={"My Professional skills"} className={classes.textareaField}/>}
            </div>
            <div className={classes.formControl}>
                <b>About Me:</b>
                {<Field component={Textarea} name={"aboutMe"} placeholder={"Few words about me"}  className={classes.textareaField}/> }
            </div>
            <div className={classes.formControl}>
                <b>Contacts:</b>
                {props.initialValues.contacts &&
                    Object.entries(props.initialValues.contacts).map(([key, value]) => {
                        const title = key as string;
                        if (props.initialValues.contacts) {
                            return (
                             <div className={classes.formControl} key={key}>
                                 <b>{key} : {
                                     <Field
                                         component={Input}
                                         name={"contacts." +key}
                                         placeholder={key}
                                         key={key}
                                         title={title}
                                         value={value}
                                         className={classes.inputField}
                                     />
                                 }

                                 </b>
                             </div>


                            );
                        }
                        return null;
                    })}
            </div>
            <div>
                <button >Save</button>
            </div>

        </form>
    );
};





export const ProfileFormContainer = reduxForm<UserProfileType, {}>({form: "edit profile"})(ProfileDataForm)