import React, { useState } from "react"
import ManagerNav from "../components/ManagerNav"
import axios from "axios"

export default function ManagerUploadView() {

    const [ file, setFile ] = useState(null)
    const [ loading, setLoading ] = useState(null)

    const onFileAdded = (event) => {

        // validate .csv format
        setLoading(true)

        // get autofill data from server
        const data = new FormData()
        const newFile = event.target.files[0]
        data.append('csvFile', newFile)
        axios.post("https://boiling-inlet-28252.herokuapp.com/upload/csv", data)
        .then(response => {
            // update 
            console.log(response)
            setFile(response)
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <ManagerNav />
            <form>
                <div>
                    <input type="file" onChange={event=>onFileAdded(event)}/>
                </div>
                { loading && <p>Loading...</p> }
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