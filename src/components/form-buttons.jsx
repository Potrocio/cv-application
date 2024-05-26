import { GeneralInformationDetails, GeneralInformationForm} from "./general-information-form"
import { EducationDetails, EducationForm } from "./education-form"
import { PracticalExperienceDetails, PracticalExperienceForm } from "./practical-experience-form"
import { useState } from "react"

export function SubmitButton({handleChange, formData, setGeneralInformationState, setEducationState, setPracticalExperienceState}) {

    const handleClickSubmit = () => {
        setGeneralInformationState(<GeneralInformationDetails formData={formData}/>)
        setEducationState(<EducationDetails formData={formData}/>)
        setPracticalExperienceState(<PracticalExperienceDetails formData={formData}/>)
        setFormButton(<button onClick={handleClickEdit} type= "button">Edit</button>)
    }

    const handleClickEdit = () => {
        setGeneralInformationState(<GeneralInformationForm handleChange={handleChange} formData = {formData}/>)
        setEducationState(<EducationForm handleChange={handleChange} formData = {formData}/>)
        setPracticalExperienceState(<PracticalExperienceForm handleChange={handleChange} formData = {formData}/>)
        setFormButton(<button onClick={handleClickSubmit} type= "button">Submit</button>)
    }

    const [formButton, setFormButton] = useState(
        <button onClick={handleClickSubmit} type= "button">Submit</button>
    )

    return (
        <>
            {formButton}
        </>
    )
}