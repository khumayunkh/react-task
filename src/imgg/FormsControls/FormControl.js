import React from "react"
import h from './FormControl.module.css'

export const Textarea=({input, meta, ...props})=>{
    const hasError=meta.touched && meta.error;
    return(
        <div className={h.formControle  +" "+ (hasError ? h.error : "")}>
            <textarea {...input} {...props}/>
            {hasError &&<span>{meta.error}</span>}
        </div>
    )
}

export const Input=({input, meta, ...props})=>{
    const hasError=meta.touched && meta.error;
    return(
        <div className={h.formControle  +" "+ (hasError ? h.error : "")}>
            <input {...input} {...props}/>
            {hasError &&<span>{meta.error}</span>}
        </div>
    )
}