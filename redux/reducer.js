import { combineReducers } from "redux";
import authReducer from "./entities/auth/auth.reducer";
import appReducer from "./entities/app/app.reducer";


export default combineReducers({
    app: appReducer,
    auth: authReducer
  })