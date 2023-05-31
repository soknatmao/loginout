import { actionTypes } from "../Actions/ActionType"

// in reducer, we need to check action and state
const initialState = {
    products: []
}
export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS: 
        return{ ...state, products: action.payload }
        default: 
        return state
    }
}