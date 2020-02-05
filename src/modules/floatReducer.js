// reducer used to handle FloaterView state
const floatReducer = (state, action) => {
    switch (action.type) {

        // runs when a date is selected
        case "setSchedule": {
            console.log("setSchedule")
            const newSchedule = action.data
            const goalTimeMs = new Date().setHours(0,0,0,0) + newSchedule.goalTime * 60000
            const projectedTimeMs = Date.now() + newSchedule.totalBreakTime * 60000

            // inject start/finish states into break data
            newSchedule.breaks = newSchedule.breaks.map(breakData => (
                {
                    ...breakData,
                    initialStarted: false,
                    initialElapsed: 0,
                    initialFinished: false,
                }
            ))

            return {
                ...state,
                ...newSchedule,
                goalTimeMs,
                projectedTimeMs,
                projectedIsPastGoal: projectedTimeMs > goalTimeMs,
                selectedFloater: 1,
            }
        }

        // runs when a break is marked as complete
        case "updateBreaks": {
            const { totalFifteens, totalThirties, totalBreakTime } = action.data
            const projectedTimeMs = Date.now() + totalBreakTime * 60000
            console.log(state.projectedTimeMs, projectedTimeMs)
            return {
                ...state,
                totalFifteens, 
                totalThirties,
                totalBreakTime,
                projectedTimeMs,
                projectedIsPastGoal: projectedTimeMs > state.goalTimeMs,
            }
        }

        // runs when a floater is selected from dropdown
        case "updateFloater": {
            return {
                ...state,
                selectedFloater: Number(action.data),
            }
        }

        case "setBreakStarted": {
            // need an index to know which break to change
            // need to know at what time the break was started 
            const {breakIndex, startTime} = action.data
            state.breaks[breakIndex].started = startTime

            return {
                ...state,
            }
            // do i need to keep state in break and pass it up? 
        }

        case "updateProjected": {
            const projectedTimeMs = Date.now() + state.totalBreakTime * 60000
            return {
                ...state,
                projectedTimeMs
            }
        }

        default: {
            return state
        }
    }
}

export default floatReducer