import React from "react"
import ordinal from "ordinal"

export default function Break(props) {
    const breakTitle = `${props.employee}'s ${ordinal(props.breakNum)} ${props.duration}`
    const scheduledTime = `${props.startTime}-${props.endTime}`
    return (
        <div style={{borderStyle: 'solid'}}>
            <h4 class="break-title">{breakTitle}</h4>
            <p class="scheduled-time">{scheduledTime}</p>
            <input type="checkbox" class="started" />
            <p class="time-elapsed">05:23</p>
            <input type="checkbox" class="finished" />
            <p>Started</p>s
            <p>Time Elapsed</p>
            <p>Finished</p>
        </div>
    )
}