import { combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({

    frontUser: userReducer,



});

export default rootReducer;