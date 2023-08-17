import {useContext, useEffect, useState, useRef} from 'react'
import React, {} from 'react'
import ReactDOM from 'react-dom/client'
function Home(props) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        schoolName: "",
        schoolStudy: "",

    })

    function handleChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>

            <div className="window" style={{width: "300px"}}>
                <div className="title-bar">
                    <div className="title-bar-text">CV Application</div>
                    <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
                <div className="window-body">
                    <p>There's so much room for activities!</p>
                    <label htmlFor="firstName">first name:</label>
                    <input type="text" id={"firstName"} placeholder={"first name"} name={"firstName"} value={formData.firstName} onChange={handleChange}/>
                    <div>{formData.firstName}</div>


              </div>
            </div>


        </>
    )
}

export default Home
