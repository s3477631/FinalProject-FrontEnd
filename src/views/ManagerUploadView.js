import React, { useState } from "react"
import ManagerNav from "../components/ManagerNav"
import axios from "axios"
import { Redirect } from "react-router-dom"

export default function ManagerUploadView() {

    const [ loading, setLoading ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ success, setSuccess ] = useState(null)

    const onFileAdded = (event) => {

        // reset state
        // setLoading("Fetching autofill data...")
        // setError(false)

        // get autofill data from server
        // const data = new FormData()
        const newFile = event.target.files[0]
        
        const isCsv = newFile && newFile.name.includes(".csv")
        if (isCsv) {
            // data.append('csvFile', newFile)
        } else {
            // setLoading(false)
            setError("Invalid format. Please upload a .csv file.")
        }
    }

    const onSubmit = event => {
        event.preventDefault()

        // indicate upload has started
        setLoading("Uploading...")

        // const formElements = event.target.elements
        // const data = {
        //     file: formElements[0].files[0],
        //     date: formElements[1].value,
        //     goalTime: formElements[2].value,
        //     numFloaters: formElements[3].value
        // }

        // const token = localStorage.getItem("token")
        // const config = {
        //     headers: { Authorization: `${token}` }
        // };

        // axios.post("http://localhost:3002/upload/csv", data, config)
        //     .then(response => {
        //         setSuccess(true)
        //     }).catch(error => {
        //         setLoading(false)
        //         setError("" + error)
        //     })

        setTimeout(() => {
            setSuccess(true)
        }, 500)
    }

    return (
        <>
            <ManagerNav />
            { loading }
            { error && <p style={{color: "red"}}>An error occured during upload:<br/>{error}</p> }
                <div style={{display: "flex", justifyContent: "center"}}>
                    <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <label>Drop Roster</label>
                        <input type="file" required onChange={onFileAdded} style={{width: "100%"}}/>
                        <br />
                        <label>Select date </label>
                        <input type="date" required />
                        <br /> 
                        <label>Select goal time </label>
                        <input type="time" required />
                        <br />
                        <button style={{height: "40px"}}>Generate Break Schedule</button>
                    </form>
                </div>
            { success && <Redirect to="/view" /> }
        </>
    )
}