import {CreateInput, CreateTextarea} from './create-input'

export function PracticalExperienceForm({handleChange, formData}) {
    return (
        <>
            <CreateInput 
                labelName = "Company name"
                inputId = "companyName"
                inputType = "text"
                handleChange = {handleChange}
                formData = {formData}
            />
            <CreateInput 
                labelName = "Position title"
                inputId = "positionTitle"
                inputType = "text"
                handleChange = {handleChange}
                formData = {formData}
            />
            <div className = "work-dates">
                <CreateInput 
                    labelName = "From"
                    inputId = "workedFrom"
                    inputType = "date"
                    handleChange = {handleChange}
                    formData = {formData}
                    />
                <CreateInput 
                    labelName = "To"
                    inputId = "workedTo"
                    inputType = "date"
                    handleChange = {handleChange}
                    formData = {formData}
                    />
            </div>
            <CreateTextarea 
                labelName = "Main responsibilities"
                inputId = "mainResponsibilities"
                handleChange = {handleChange}
                formData = {formData}
            />
        </>
    )
}

export function PracticalExperienceDetails({formData}) {
    return (
        <>
            <p>
                {formData['companyName']}
            </p>

            <p>
                {formData['positionTitle']}
            </p>

            <p>
                {formData['workedFrom']}
            </p>

            <p>
                {formData['workedTo']}
            </p>

            <p>
                {formData['mainResponsibilities']}
            </p>
        </>
    )
}