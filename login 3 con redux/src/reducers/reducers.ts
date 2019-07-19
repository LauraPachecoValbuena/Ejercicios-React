import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import { IUser } from '../interfaces';
import { usersReducer } from "./usersReducer";

export interface IGlobalState {
  token: string;
  users: IUser[];
}

export const reducers = combineReducers<IGlobalState>({
  token: tokenReducer,
  users: usersReducer
});
