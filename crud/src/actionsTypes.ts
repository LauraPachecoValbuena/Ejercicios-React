import { IMyUser } from "./reducers/myUserReducer";
import { IUser } from "./interfaceIuser";

type TSaveTokenAction = {
  type: "SAVE_TOKEN";
  token: string;
};

type TSaveMyUserAction = {
  type: "SAVE_MY_USER";
  myUser: IMyUser;
};

type TSetUsersAction = {
  type: "SET_USERS";
  users: IUser[];
};

type TRemoveUserAction = {
  type: "REMOVE_USER";
  user_id: string;
};

type TEditUserAction = {
  type: "EDIT_USER";
  user_id: string;
  user: IUser;
};

type TSaveUserAction = {
  type: "SAVE_USER";
  user_id: string;
  user: IUser;
};

type TAddNewUserAction = {
  type: "ADD_NEW_USER";
  user: IUser;
};

export type TAction =
  | TSaveTokenAction
  | TSaveMyUserAction
  | TSetUsersAction
  | TRemoveUserAction
  | TEditUserAction
  | TSaveUserAction
  | TAddNewUserAction;
