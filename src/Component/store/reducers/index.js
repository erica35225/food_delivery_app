import { combineReducers } from "redux";

import { ShowCartReducer } from "./ShowCartReducer";
export const rootReducer = combineReducers({
  showCart: ShowCartReducer
});
