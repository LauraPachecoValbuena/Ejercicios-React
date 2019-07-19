import { TAction } from "../actionTypes";

const initialState: number = 0;

export const valueReducer = (
  state: number = initialState,
  action: TAction
): number => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === "RESET") {
    return initialState;
  }
  if (action.type === "SETNUMBER") {
    return action.newValue;
  }
  return state;
};
