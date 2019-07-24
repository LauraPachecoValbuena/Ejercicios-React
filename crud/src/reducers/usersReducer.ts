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

  if (action.type === "EDIT_USER") {
    const users = state;
    const index = users.findIndex(u => u._id === action.user_id);
    if(index !== -1){
      users[index] = action.user
    }
    return [...users]
  }

  // if (action.type === "SAVE_USER") {
  //   const users = state;
  //   const index = state.findIndex(u => u._id === action.user_id);
  //   users[index] = action.user
  //   return [...users]
  // }

  if (action.type === "ADD_NEW_USER") {
    state.push(action.user)
    return [...state]
  }
  return state;
};
