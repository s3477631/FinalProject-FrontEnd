import React from "react"
import Break from "../components/Break"
import Logout from "../components/Logout"

export default function FloaterView() {
    return (
        <>
            <Logout />
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
            <div class="floater-stats">
                <div class="breaks-left" style={{borderStyle: "solid"}}>
                    <h4>Breaks Left:</h4>
                    <p class="fifteens">20 x 15 min</p>
                    <p class="thirties">10 x 30 min</p>
                    <p class="total">10hrs total</p>
                </div>
                <div class="goal" style={{borderStyle: "solid"}}>
                    <h4>Goal:</h4>
                    <p>4:00pm</p>
                </div>
                <div class="projected" style={{borderStyle: "solid"}}>
                    <h4>Projected:</h4>
                    <p>3:30pm</p>
                </div>
            </div>
        </>
    )
}

