import { UserAction } from "@actions/userAction";
import { createReducer } from "typesafe-actions"


export interface UserState {
  name: string;
  age: number;
  language: string;
}

const initialState: UserState = {
  name: '오승딱',
  age: 28,
  language: 'ko',
}

const userReducer = createReducer<UserState, UserAction>(initialState, {
  SET_USER_NAME: (state, { payload }) => ({ ...state, name: payload }),
  SET_USER_AGE: (state, { payload }) => ({ ...state, age: payload }),
  SET_USER_LANGUAGE: (state, { payload }) => ({ ...state, language: payload }),
  RESET_USER: () => ({ ...initialState }),
});

export default userReducer;