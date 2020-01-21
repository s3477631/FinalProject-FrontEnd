export default function(state, action) {
    switch(action.type) {
        case "setUser": {
            return {
                ...state,
                user: action.data
            }
        }
        case "setToken": {
            return {
                ...state, 
                token: action.data
            }
        }
        default: {
            return state
        }
    }
}