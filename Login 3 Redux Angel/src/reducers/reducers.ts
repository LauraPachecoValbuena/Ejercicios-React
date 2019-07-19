import { combineReducers } from "redux";
import { valueReducer } from "./valueReducer";

export interface IGlobalState {
    value: number;
}

export const reducers = combineReducers<IGlobalState>({
    value: valueReducer
});