import { combineReducers } from "redux";
import userReducer, { UserState } from "./userReducer";

export interface RootState {
  userStore: UserState;
  // socketStore: 
}

const rootReducer = combineReducers<RootState>({
  userStore: userReducer,
});

export default rootReducer;