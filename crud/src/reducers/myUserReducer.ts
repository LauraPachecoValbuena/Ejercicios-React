import { TAction } from "../actionsTypes";

export interface IMyUser {
  token?: string;
  exp?: number;
  iat?: number;
  id?: string;
  isAdmin?: boolean;
  username?: string;
}

const initialState: IMyUser = {};

export const myUserReducer = (
  state: IMyUser = initialState,
  action: TAction
): IMyUser => {
  if (action.type === "SAVE_MY_USER") {
      return action.myUser;
  }
  return state;
};
