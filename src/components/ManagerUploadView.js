import React from "react"
import ManagerNav from "./ManagerNav"

export default function ManagerUploadView() {
    return (
        <>
            <ManagerNav />
            <form>
                <div>
                    <input type="file"/>
                </div>
                <div>
                    <label>Select date </label>
                    <input type="date"/>
                </div>
                <button>Generate Break Schedule</button>
            </form>
        </>
    )
}