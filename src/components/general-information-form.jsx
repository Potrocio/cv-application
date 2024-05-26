import {CreateInput} from './create-input'

export function GeneralInformationForm({handleChange, formData}) {

    return (
        <>
            <CreateInput 
                labelName = "Full name"
                inputId = "userName"
                inputType = "text"
                handleChange = {handleChange}
                formData = {formData}
            />
            <CreateInput 
                labelName = "Email"
                inputId = "email"
                inputType = "email"
                handleChange = {handleChange}
                formData = {formData}
            />
            <CreateInput 
                labelName = "Phone number"
                inputId = "phoneNumber"
                inputType = "tel"
                handleChange = {handleChange}
                formData = {formData}
            />          
        </>
    )
}

export function GeneralInformationDetails({formData}) {
    return (
        <>
            <p>
                {formData['userName']}
            </p>

            <p>
                {formData['email']}
            </p>

            <p>
                {formData['phoneNumber']}
            </p>
        </>
    )
}