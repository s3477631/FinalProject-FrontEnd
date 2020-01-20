import React from "react"

export default function App() {
    return (
        <>
            <h1>Break Schedule</h1>
            <select>
                <option value="1">24/01/20</option>
                <option value="2">25/01/20</option>
                <option value="3">26/01/20</option>
                <option value="4">27/01/20</option>
            </select>
            <select>
                <option value="1">Floater 1</option>
                <option value="2">Floater 2</option>
                <option value="3">Floater 3</option>
            </select>
            <div style={{borderStyle: 'solid'}}>
                <h4 class="break-title">Zach's 1st 15</h4>
                <p class="scheduled-time">10:00 - 10:15</p>
                <input type="checkbox" class="started" />
                <p class="time-elapsed">05:23</p>
                <input type="checkbox" class="finished" />
                <p>Started</p>
                <p>Time Elapsed</p>
                <p>Finished</p>
            </div>
        </>
    )
}

