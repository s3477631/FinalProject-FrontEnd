export default function(state, action) {
    switch(action.type) {
        case "setUser": {
            const user = action.data
            return {
                ...state,
                user
            }
        }
        case "setToken": {
            const token = action.data
            return {
                ...state, 
                token
            }
        }
        default: {
            return state
        }
    }
}