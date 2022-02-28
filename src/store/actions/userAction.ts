import { UserState } from "@store/reducers/userReducer";
import { ActionType,createAction } from "typesafe-actions";

export const setUserName = createAction('SET_USER_NAME')<string>();
export const setUserAge = createAction('SET_USER_AGE')<number>();
export const resetUser = createAction('RESET_USER')<UserState>();
export const setUserLanguage = createAction('SET_USER_LANGUAGE',(language: string) => {
  localStorage.setItem('_language',language);
  return language; 
})<string>();

const actionTypes = {
  setUserName,
  setUserAge,
  resetUser,
  setUserLanguage
};

export type UserAction = ActionType<typeof actionTypes>;