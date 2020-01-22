import React from "react"

export default function Break() {
    return (
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
    )
}