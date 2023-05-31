import { actionTypes } from "../Actions/ActionType"

// in reducer, we need to check action and state
const initialState = {
    profile: {}
}
export const profileReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case actionTypes.FETCH_PROFILE: 
            return{ ...state, profile: payload }
        default: 
        return state
    }

}