import { combineReducers } from "redux";
import { myUserReducer, IMyUser } from "./myUserReducer";
import { tokenReducer } from "./tokenReducer";
import { IUser } from "../interfaceIuser";
import { usersReducer } from "./usersReducer";

export interface IGlobalState {
  token: string;
  myUser: IMyUser;
  users: IUser[];
}

export const reducers = combineReducers<IGlobalState>({
  token: tokenReducer,
  myUser: myUserReducer,
  users: usersReducer
});
