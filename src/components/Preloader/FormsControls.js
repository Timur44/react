import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControls.module.css' 
export const Textarea=({input,meta:{touched,error},...props})=>{
    
    return (
        
        <div className={touched && error && styles.error}>
            <textarea {...input} {...props}/>
            {touched && error && <span className={styles.error}>{error}</span>}
        </div>
    )
}

export const Input=({input,meta:{touched,error},...props})=>{
    return (
        <div className={touched && error && styles.error}>
            <input {...input} {...props}/>
            {touched && error && <span className={styles.error}>{error}</span>}
        </div>
    )
}

export const createField=(placeholder,name,validators,component,props={},text="")=>{
    return <div>
        <Field  placeholder={placeholder} name={name} validators={validators} component={component} {...props}/>
    </div>
}