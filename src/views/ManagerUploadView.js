import React, { useState } from "react"
import ManagerNav from "../components/ManagerNav"
import axios from "axios"
import { Redirect } from "react-router-dom"
import styled from "styled-components"
export default function ManagerUploadView() {

    const Dropzone = styled.div`
    width: 50vw;
    height: 80vh;
    border: 4px dashed #fff;
    `
    const Background = styled.div`
        background-color: red;
    `

    const [ loading, setLoading ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ success, setSuccess ] = useState(null)
    
    const onFileAdded = (event) => {

        console.log("onfileadded")
        // reset state
        setLoading("Fetching autofill data...")
        setError(false)

        // get autofill data from server
        const data = new FormData()
        const newFile = event.target.files[0]
        const token = localStorage.getItem("token")
        const config = {
            headers: { Authorization: `${token}` }
        };
        
        const isCsv = newFile && newFile.name.includes(".csv")
        if (isCsv) {
            data.append('csvFile', newFile)
            axios.post("https://boiling-inlet-28252.herokuapp.com/upload/csv", data, config)
            .then(response => {
                // if successful, will come back with autofill data
                // uncomment below when axios request works
                setLoading(false)
                console.log("autofill changed")
            }).catch(error => {
                setLoading(false)
                setError("" + error)
            })
        } else {
            setLoading(false)
            setError("Invalid format. Please upload a .csv file.")
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        // check all fields are filled
        // error if not
        // axios post final form with settings
        // const formElements = event.target.elements
        // const data = {
        //     file: formElements[0].files[0],
        //     date: formElements[1].value,
        //     goalTime: formElements[2].value,
        //     numFloaters: formElements[3].value
        // }

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
            <Background>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <label>Drop Roster</label>
                        <Dropzone>
                             <input type="file" onChange={onFileAdded} required style={{width: "100%"}}/>
                        </Dropzone>
                        <br />
                        <label>Select date </label>
                        <input type="date" required />
                        <br /> 
                        <label>Select goal time </label>
                        <input type="time" required />
                        <br />
                        <label>Select number of floaters </label>
                        <input type="number" required />
                        <br />
                        <button style={{height: "40px"}}>Generate Break Schedule</button>
                    </form>
                    </div>
            { success && <Redirect to="/view" /> }
            </Background>
        </>
    )
}