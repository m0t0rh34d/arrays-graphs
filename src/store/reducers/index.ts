import { combineReducers } from "@reduxjs/toolkit";
import arrReducer from "./arrReducer";
import objReducer from './objReducer';

// //import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  arr: arrReducer, 
  obj: objReducer
});

export default rootReducer;
