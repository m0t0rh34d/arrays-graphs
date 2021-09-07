import { createStore } from "redux";
import arrReducer from './reducers/arrReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(arrReducer, composeWithDevTools())


export default store


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;