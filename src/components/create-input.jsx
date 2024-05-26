import { useState } from "react"

export function CreateInput({labelName, inputId, inputType, handleChange, formData}) {
    const [value, setValue] = useState(formData[inputId])
    
    return (
        <div className = {inputId}>
            <label htmlFor = {inputId}> {labelName} </label>
            <input type= {inputType} id = {inputId} name= {inputId} value = {value} onChange= {(event) => {handleChange(event); setValue(event.target.value);}}/>
        </div>
    )
}

export function CreateTextarea({labelName, inputId, handleChange, formData, rows= 10, cols= 30}) {
    const [value, setValue] = useState(formData[inputId])

    return (
        <div className = {inputId}>
            <label htmlFor = {inputId}> {labelName} </label>
            <textarea id = {inputId} name= {inputId} value = {value} onChange= {(event) => {handleChange(event); setValue(event.target.value);}} rows= {rows} cols= {cols}></textarea> 
        </div>
    )

}