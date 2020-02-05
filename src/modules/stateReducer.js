export default function(state, action) {
    switch(action.type) {
        case "setSession": {
            const user = action.data.user
            const token = action.data.token
            return {
                ...state, 
                user,
                token
            }
        }
        case 'setSchedule': {
            const schedule = action.data
            return {
                ...state,
                schedule
            }
        }
        default: {
            return state
        }
    }
}