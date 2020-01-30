import React, { useState } from "react"
import ManagerNav from "../components/ManagerNav"
import axios from "axios"

export default function ManagerUploadView() {

    const [ file, setFile ] = useState(null)
    const [ loading, setLoading ] = useState(null)
    const [ error, setError ] = useState(null)

    const onFileAdded = (event) => {

        // reset state
        setLoading(true)
        setError(false)
        setFile(null)

        // get autofill data from server
        const data = new FormData()
        const newFile = event.target.files[0]

        // validate
        const isCsv = newFile.name.includes(".csv")
        if (isCsv) {
            data.append('csvFile', newFile)
            axios.post("https://boiling-inlet-28252.herokuapp.com/upload/csvajsdhas", data)
            .then(response => {
                setFile(response)
                setLoading(false)
            }).catch(error => {
                setLoading(false)
                setError("" + error)
            })
        } else {
            setLoading(false)
            setError("Invalid format. Please upload a .csv file.")
            setFile(null)
        }
        
    }

    return (
        <>
            <ManagerNav />
            <form>
                <div>
                    <input type="file" onChange={event=>onFileAdded(event)}/>
                </div>
                { loading && <p>Loading...</p> }
                { error && <p style={{color: "red"}}>An error occured during upload:<br/>{error}</p> }
                {
                    file && <>
                        <div>
                            <label>Select date </label>
                            <input type="date"/>
                        </div>
                        <div>
                            <label>Select goal time </label>
                            <input type="time"/>
                        </div>
                        <div>
                            <label>Select number of floaters </label>
                            <input type="number"/>
                        </div>
                        <button>Generate Break Schedule</button>
                    </>
                }
            </form>
        </>
    )
}