import {CreateInput} from './create-input'

export function EducationForm({handleChange, formData}) {
    return (
        <>
            <CreateInput 
                labelName = "School name"
                inputId = "schoolName"
                inputType = "text"
                handleChange = {handleChange}
                formData = {formData}
            />
            <CreateInput 
                labelName = "Title of study"
                inputId = "titleOfStudy"
                inputType = "text"
                handleChange = {handleChange}
                formData = {formData}
            />
            <CreateInput 
                labelName = "Date of study"
                inputId = "dateOfStudy"
                inputType = "date"
                handleChange = {handleChange}
                formData = {formData}
            />           
        </>
    )
}

export function EducationDetails({formData}) {
    return (
        <>
            <p>
                {formData['schoolName']}
            </p>

            <p>
                {formData['titleOfStudy']}
            </p>

            <p>
                {formData['dateOfStudy']}
            </p>
        </>
    )
}