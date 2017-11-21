import { combineReducers } from "redux";

import account from "./AccountReducer";
import business from "./BusinessReducer";

export default combineReducers({
  account,
  business
})