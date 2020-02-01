import React, { useState } from "react"
import ManagerNav from "../components/ManagerNav"
import axios from "axios"
import { Redirect } from "react-router-dom";

export default function ManagerUploadView() {

    const [ autofill, setAutofill ] = useState(null)
    const [ loading, setLoading ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ success, setSuccess ] = useState(null)

    const onFileAdded = (event) => {

        // reset state
        setLoading("Fetching autofill data...")
        setError(false)
        setAutofill(null)

        // get autofill data from server
        const data = new FormData()
        const newFile = event.target.files[0]

        // validate it's a csv before posting
        const isCsv = newFile && newFile.name.includes(".csv")
        if (isCsv) {
            data.append('csvFile', newFile)
            axios.post("https://boiling-inlet-28252.herokuapp.com/upload/csv", data)
            .then(response => {
                // if successful, will come back with autofill data
                // uncomment below when axios request works
                // setAutofill(response)
                setAutofill({date: "2020-01-30", numFloaters: 2})
                setLoading(false)
            }).catch(error => {
                setLoading(false)
                setError("" + error)
            })
        } else {
            setLoading(false)
            setError("Invalid format. Please upload a .csv file.")
            setAutofill(null)
        }
        
    }

    const onSubmit = event => {
        event.preventDefault()
        // check all fields are filled
        // error if not
        // axios post final form with settings
        const formElements = event.target.elements
        const data = {
            file: formElements[0].files[0],
            date: formElements[1].value,
            goalTime: formElements[2].value,
            numFloaters: formElements[3].value
        }

        // indicate upload has started
        setLoading("Uploading...")

        // uncomment when backend is complete
        // axios.post("https://boiling-inlet-28252.herokuapp.com/upload/csv", data)
        // .then(response => {
        //     console.log(response)
        //     // redirect
        // }).catch(error => {
        //     setError("" + error)
        // })

        setTimeout(() => {
            setSuccess(true)
        }, 500)
    }

    return (
        <>
            <ManagerNav />
            { loading }
            { error && <p style={{color: "red"}}>An error occured during upload:<br/>{error}</p> }
            <form onSubmit={onSubmit}>
                <div>
                    <input type="file" onChange={onFileAdded} required />
                </div>
                {
                    autofill && <>
                        <div>
                            <label>Select date </label>
                            <input type="date" defaultValue={autofill.date} required />
                        </div>
                        <div>
                            <label>Select goal time </label>
                            <input type="time" required />
                        </div>
                        <div>
                            <label>Select number of floaters </label>
                            <input type="number" defaultValue={autofill.numFloaters} required />
                        </div>
                        <button>Generate Break Schedule</button>
                    </>
                }
            </form>
            { success && <Redirect to="/view" /> }
        </>
    )
}