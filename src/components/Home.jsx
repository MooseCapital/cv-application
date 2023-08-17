import {useContext, useEffect, useState, useRef} from 'react'
import React, {} from 'react'
import ReactDOM from 'react-dom/client'
function Home(props) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
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
            <label htmlFor="firstName">first name:</label>
            <input type="text" id={"firstName"} placeholder={"first name"} name={"firstName"} value={formData.firstName} onChange={handleChange}/>
            <div>{formData.firstName}</div>
        </>
    )
}

export default Home
