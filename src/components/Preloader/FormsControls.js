import React from 'react';
import styles from './FormsControls.module.css' 
export const Textarea=({input,meta,...props})=>{
    
    return (
        
        <div className={meta.touched && meta.error && styles.error}>
            <textarea {...input} {...props}/>
            {meta.touched && meta.error && <span className={styles.error}>{meta.error}</span>}
        </div>
    )
}

export const Input=({input,meta,...props})=>{
    return (
        <div className={meta.touched && meta.error && styles.error}>
            <input {...input} {...props}/>
            {meta.touched && meta.error && <span className={styles.error}>{meta.error}</span>}
        </div>
    )
}