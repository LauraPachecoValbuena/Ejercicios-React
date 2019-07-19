import { TAction } from "./actionTypes";
import { ActionCreator } from "redux";

export const increment: ActionCreator<TAction> = () => ({
  type: "INCREMENT"
});

export const decrement: ActionCreator<TAction> = () => ({
  type: "DECREMENT"
});

export const reset: ActionCreator<TAction> = () => ({
  type: "RESET"
});

export const setNumber: ActionCreator<TAction> = (newValue: number) => ({
  type: "SETNUMBER",
  newValue
});
