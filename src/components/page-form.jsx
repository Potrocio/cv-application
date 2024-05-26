import '../styles/page-form.css'
import { SubmitButton } from './form-buttons'
import { useState } from 'react';
import {GeneralInformationForm} from './general-information-form';
import {EducationForm} from './education-form';
import {PracticalExperienceForm} from './practical-experience-form';


export function PageForm() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phoneNumber: '',
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
        companyName: '',
        positionTitle: '',
        workedFrom: '',
        workedTo: '',
        mainResponsibilities: ''
    })

    function handleChange(event) {
        const inputName = event.target.id
        const inputValue = event.target.value
        setFormData(formData, formData[inputName] = inputValue)
    }

    const [generalInformationState, setGeneralInformationState] = useState(() => {
        return (
            <GeneralInformationForm 
                handleChange = {handleChange}
                formData = {formData}
            />
        )}
    )

    const [educationState, setEducationState] = useState(() => {
        return (
            <EducationForm
                handleChange = {handleChange}
                formData = {formData}
            />
        )}
    )

    const [practicalExperienceState, setPracticalExperienceState] = useState(() => {
        return (
            <PracticalExperienceForm
                handleChange = {handleChange}
                formData = {formData}
            />
        )}
    )

    return (
        <form className='page-form'>
            <fieldset>
                <legend>General Information</legend>
                {generalInformationState}
            </fieldset>

            <fieldset>
                <legend>Education</legend>
                {educationState}
            </fieldset>

            <fieldset>
                <legend>Practical Experience</legend>
                {practicalExperienceState}
            </fieldset>
            <SubmitButton
                handleChange = {handleChange}             
                formData={formData}
                setGeneralInformationState = {setGeneralInformationState}
                setEducationState = {setEducationState}
                setPracticalExperienceState = {setPracticalExperienceState}
            />
        </form>
    )
}