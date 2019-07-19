import { TAction } from "../actionTypes";
import { IUser } from "../interfaces";

const initialState: IUser[] = [];

export const usersReducer = (
  state: IUser[] = initialState,
  action: TAction
): IUser[] => {
  if (action.type === "SET_USERS") {
    return action.users;
  }
  return state;
};
