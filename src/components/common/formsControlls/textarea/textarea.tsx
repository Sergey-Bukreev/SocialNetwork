import React from 'react';
import classes from "./../FormControll.module.css"

// export const Textarea = ({input, meta, ...props}:any) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={classes.formControl + " " + (hasError ? classes.error :"")}>
//             <textarea {...input} {...props}/>
//             <div>
//                 { hasError &&<span>{meta.error}</span> }
//             </div>
//         </div>
//     );
// };

 const FormControl = ({input, meta, child, ...props}:any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error :"")}>
            <div>{props.children}</div>
            { hasError &&<span>{meta.error}</span> }
        </div>
    )
}
export const Textarea = (props:any) => {
    const {input, meta, child, ...restProps}=props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props:any) => {
    const {input, meta, child, ...restProps}=props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}