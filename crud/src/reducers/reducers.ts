import { combineReducers } from "redux";
import { myUserReducer, IMyUser } from "./myUserReducer";
import { tokenReducer } from "./tokenReducer";

export interface IGlobalState {
    token: string;
    myUser: IMyUser;
  
}

export const reducers = combineReducers<IGlobalState>({
    token: tokenReducer,
    myUser: myUserReducer
  
});
