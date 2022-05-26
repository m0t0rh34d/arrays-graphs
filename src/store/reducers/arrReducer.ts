const initialState = {
    arr: [1, 2]
}


const arrReducer = (state = initialState, action: { type: any; payload: any }) => {
    switch (action.type) {
        case 'GENER_ARR':
            return {
                arr: [...action.payload]
            }
        case 'SAVE_ARR':
            return {
                arr: [...action.payload]
            }
        case 'PUSH_RAND':
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        default: 
            return {arr: ["EMPTY"]   } 
            
    }
}


export default arrReducer




// //import { combineReducers } from "@reduxjs/toolkit";

// import arrReducer from "./arr";

// const rootReducer = combineReducers({
//     arrReducer
// })

// export default rootReducer;