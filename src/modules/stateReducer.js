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
        case "setSession": {
            const user = action.data.user
            const token = action.data.token
            return {
                ...state, 
                user,
                token
            }
        }
        default: {
            return state
        }
    }
}