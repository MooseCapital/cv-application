import {useContext, useEffect, useState, useRef} from 'react'
import React, {} from 'react'
import ReactDOM from 'react-dom/client'
function Home(props) {

    const [formData, setFormData] = useState( JSON.parse(localStorage.getItem("formData")) || {
        name: "",
        email: "",
        phone: "",
        schoolName: "",
        schoolStudy: "",
        schoolGrad: "",
        employerName: "",
        workPosition: "",
        yearsWorked: "",
        isFormSubmitted: false,
    })

    function handleChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }
    function resetForm() {
        console.log("form reset")
        setFormData(prevData => {
            return {
            name: "",
            email: "",
            phone: "",
            schoolName: "",
            schoolStudy: "",
            schoolGrad: "",
            employerName: "",
            workPosition: "",
            yearsWorked: "",
            isFormSubmitted: false,
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
            setFormData(prevState => {
                return {
                    ...prevState,
                    isFormSubmitted: true
                }
            })
        console.log(formData)

    }
    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData))

        return () => {

        }
    },[formData])

    return (
        <>

            <div className="window" style={{width: "min-content"}}>
                <div className="title-bar">
                    <div className="title-bar-text">CV Application</div>
                    <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>

                <div className="window-body">
                    <form className={"form1"} onSubmit={handleSubmit}>
                    <div className="info-side">
                        <h5>Info</h5>
                        <label htmlFor="Name">Name:</label>
                        <div className="formSubmitted">{formData.isFormSubmitted && formData.name}</div>
                        <input type="text" id={"Name"} placeholder={""} name={"name"} value={formData.name} onChange={handleChange}/>
                        <label htmlFor="Email">Email:</label>
                        <div className="formSubmitted">{formData.isFormSubmitted && formData.email}</div>
                        <input type="email" id={"Email"} placeholder={""} name={"email"} value={formData.email} onChange={handleChange}/>
                        <label htmlFor="Phone">Phone:</label>
                        <div className="formSubmitted">{formData.isFormSubmitted && formData.phone}</div>
                        <input type="text" id={"Phone"} placeholder={""} name={"phone"} value={formData.phone} onChange={handleChange}/>


                    </div>
                    <div className="school-side">
                        <h5>School</h5>
                        <label htmlFor="schoolName">School Name:</label>
                        <div className="formSubmitted">{formData.isFormSubmitted && formData.schoolName}</div>
                        <input type="text" id={"text"} placeholder={""} name={"schoolName"} value={formData.schoolName} onChange={handleChange}/>
                        <label htmlFor="schoolStudy">Degree:</label>
                        <div className="formSubmitted">{formData.isFormSubmitted && formData.schoolStudy}</div>
                        <input type="text" id={"schoolStudy"} placeholder={""} name={"schoolStudy"} value={formData.schoolStudy} onChange={handleChange}/>
                        <label htmlFor="schoolGrad">Year done:</label>
                        <div className="formSubmitted">{formData.isFormSubmitted && formData.schoolGrad}</div>
                        <input type="text" id={"schoolGrad"} placeholder={""} name={"schoolGrad"} value={formData.schoolGrad} onChange={handleChange}/>
            

                    </div>
                    <div className="exp-side">
                        <h5>Experience</h5>
                        <label htmlFor="employerName">Employer:</label>
                        <div className="formSubmitted">{formData.isFormSubmitted && formData.employerName}</div>
                        <input type="text" id={"employerName"} placeholder={""} name={"employerName"} value={formData.employerName} onChange={handleChange}/>
                        <label htmlFor="workPosition">position:</label>
                        <div className="formSubmitted">{formData.isFormSubmitted && formData.workPosition}</div>
                        <input type="text" id={"workPosition"} placeholder={""} name={"workPosition"} value={formData.workPosition} onChange={handleChange}/>
                        <label htmlFor="yearsWorked">Years worked:</label>
                        <div className="formSubmitted">{formData.isFormSubmitted && formData.yearsWorked}</div>
                        <input type="text" id={"yearsWorked"} placeholder={""} name={"yearsWorked"} value={formData.yearsWorked} onChange={handleChange}/>
                        
                    </div>
                    <div className="bottom-side">
                        <button type={"button"} onClick={resetForm}>reset</button>
                        <button  >Submit</button>

                    </div>

                </form>
              </div>
            </div>


        </>
    )
}

export default Home
