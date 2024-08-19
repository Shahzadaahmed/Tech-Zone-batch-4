// Note: Main reducer file...!

import { combineReducers } from "@reduxjs/toolkit";

// Note: importing all reducers...!
import userReducer from "./user-reducer/user-reducer";

const rootReducer = combineReducers({
    userStates: userReducer
});

export default rootReducer;