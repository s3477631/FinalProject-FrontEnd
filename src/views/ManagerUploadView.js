import React, { useState } from "react"
import ManagerNav from "../components/ManagerNav"
import axios from "axios"
import styled from "styled-components"
import { Table, Tr } from 'styled-table-component';
import Checkbox from "../components/FakeCheckbox"
export default function ManagerUploadView() {

    const Dropzone = styled.div`
    width: 50vw;
    height: 80vh;
    border: 4px dashed #fff;
    `
    const Background = styled.div`
        background-color: red;
        width: 100vw;
    `
    const Tablewidth = styled   .div`
        width: 100vw;
    `
    const [ loading, setLoading ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ success, setSuccess ] = useState(null)
    const [csvFilesuccess, setFilesuccess ] = useState(null)
    const [upload, setUploader] = useState(true)
    const [numBreaks, setNumBreaks] = useState(null)
    const [firstBreak, setFirstBreak] = useState(null)
    const [lastBreak, setLastBreak] = useState(null)
    const onFileAdded = (event) => {

        // // reset state
        // setLoading("Fetching autofill data...")
        setError(false)
        // setAutofill(null)

        // get autofill data from server
        const data = new FormData()
        const newFile = event.target.files[0]
        const token = localStorage.getItem("token")
        const config = {
            headers: { Authorization: `${token}` }
        };
                
        data.append('csvFile', newFile)
        axios.post("https://boiling-inlet-28252.herokuapp.com/upload/csv", data, config)
        .then(response => {
            setNumBreaks(response.data.breaks.length)
            setFilesuccess(response.data)
            setLoading(false)  
            let breakhours = response.data.breaks[response.data.breaks.length - 1].endTime  - response.data.breaks[0].startTime 
            setFirstBreak(breakhours)
            setUploader(false)
            setSuccess(true)
        })
    }

    const  onStartChange = event => { 
        event.preventDefault()
        console.log(event)

        
        axios.post('https://boiling-inlet-28252.herokuapp.com/checked/start')
        .then(response => localStorage.setItem("startTime", JSON.stringify(response.data)))
    }
    const onEndChange = event => { 
        event.preventDefault()
        const config = { 
            headers: {
                'Content-Type': 'application/json', 
                "Content-Length": 141
            }
        }   
   
        const findbystarttime = localStorage.getItem("startTime")
        axios.post('https://boiling-inlet-28252.herokuapp.com/checked/end',findbystarttime, config)
        .then(response => console.log(response))
        let breaker = firstBreak
        setFirstBreak(breaker - 15)  
        setNumBreaks(numBreaks - 1 )
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
        // setLoading("Uploading...")

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
            
            <h4>Number of Breaks to go: {numBreaks}</h4>
            <h4>Projected End time: {firstBreak}</h4>
            { error && <p style={{color: "red"}}>An error occured during upload:<br/>{error}</p> }
            <Background>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        {upload &&
                        <Dropzone>
                             <input type="file" onChange={onFileAdded} required style={{width: "100%"}}/>
                        </Dropzone>
                            }
                        <br />
             
                      {success &&
                    
              <Tablewidth style={{width: "80vw"}}>             
               <Table responsiveMd>
                  <thead>
                      <tr>
                    <th scope="col"> 
                     Start:
                    </th>
                    <th scope="col"> 
                      Name:
                    </th>
                    <th scope="col"> 
                      Duration
                    </th>
                    <th scope="col">
                      No. Breaks
                    </th>
                    <th scope="col">
                      Start
                    </th>
                    <th scope="col">
                      End
                    </th>
                    <th scope="col">
                      No. Floaters
                    </th>
                    <th scope="col"> 
                    End
                    </th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                  csvFilesuccess.breaks.map((k, v) => {
                    let startTime = new Date(null);
                    startTime.setMinutes(k.startTime); 
                    let startTimeOut = startTime.toISOString().substr(11, 8);
                    let endTime = new Date(null);
                    endTime.setMinutes(k.endTime); 
                    let endTimeOut = endTime.toISOString().substr(11, 8);
                    return(
                        <Tr key={v}>
                     <td> 
                  <Checkbox onChange={onStartChange}></Checkbox>
                    </td>
                    <td>
                    {k.name}
                    </td>
                    <td> 
                        {k.duration}
                    </td>
                    <td > 
                        {k.breakNum}
                    </td>
                    <td > 
                        {startTimeOut}
                    </td>
                    <td >
                        {endTimeOut}
                    </td>
                    <td > 
                        {k.floaterNum}
                    </td>
               
                    <td> 
                     <Checkbox onChange={onEndChange}></Checkbox>
                    </td>
                    </Tr>
                    )
                  })
                }
                  </tbody>
                  
                  </Table>   
                  </Tablewidth> 
                     }
                    </form>
                    </div>

            </Background>
        </>
    )
}