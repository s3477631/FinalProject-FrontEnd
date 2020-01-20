import React from "react"
import Break from "./Break"

export default function FloaterView() {
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
            <Break />
        </>
    )
}

