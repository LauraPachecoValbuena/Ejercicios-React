import { IUser } from "../interfaceIuser";
import { TAction } from "../actionsTypes";

const initialState: IUser[] = [];

export const usersReducer = (
  state: IUser[] = initialState,
  action: TAction
): IUser[] => {
  if (action.type === "SET_USERS") {
    return action.users;
  }

  if (action.type === "REMOVE_USER") {
    const users = state;
    const index = state.findIndex(u => u._id === action.user_id);
    users.splice(index, 1);
    return [...users];
}
  return state;
};
