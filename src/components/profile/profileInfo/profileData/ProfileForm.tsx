import React from 'react';

import {Input, Textarea} from "../../../common/formsControlls/textarea/textarea";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { UserProfileType} from "../../../../redux/profile-reducer/profileReducer";
import classes from "../../../common/formsControlls/FormControll.module.css";







export const ProfileDataForm:React.FC<InjectedFormProps<UserProfileType>> = (props:InjectedFormProps<UserProfileType>) => {
    const { handleSubmit,error } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error && <div className={classes.formSummaryError}>{error}</div>}

            <div>
                <b>Full Name: </b>
                {<Field component={Input} name={"fullName"} placeholder={"Full Name"} />}
            </div>
            <div>
                <b>Looking for a job: </b>
                {<Field component={Input} name={"lookingForAJob"} type={"checkbox"} /> }
            </div>
            <div>
                <b>My Professional Skills: </b>
                {<Field component={Textarea} name={"lookingForAJobDescription"} placeholder={"My Professional skills"} />}
            </div>
            <div>
                <b>About Me:</b>
                {<Field component={Textarea} name={"aboutMe"} placeholder={"Few words about me"} /> }
            </div>
            <div>
                <b>Contacts:</b>
                {props.initialValues.contacts &&
                    Object.entries(props.initialValues.contacts).map(([key, value]) => {
                        const title = key as string;
                        if (props.initialValues.contacts) {
                            return (
                             <div>
                                 <b>{key} : {
                                     <Field
                                         component={Input}
                                         name={"contacts." +key}
                                         placeholder={key}
                                         key={key}
                                         title={title}
                                         value={value}
                                     />
                                 }

                                 </b>
                             </div>


                            );
                        }
                        return null;
                    })}
            </div>

        </form>
    );
};





export const ProfileFormContainer = reduxForm<UserProfileType, {}>({form: "edit profile"})(ProfileDataForm)