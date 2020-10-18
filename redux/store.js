
import { compose,createStore } from "redux";
import allReducers from "./reducer";

const intialState = {
    app: {},
  }
  const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
export default createStore(allReducers, intialState, composeEnhancers());


  
  