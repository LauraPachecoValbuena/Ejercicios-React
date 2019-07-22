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

export type TAction = TSaveTokenAction | TSaveMyUserAction | TSetUsersAction | TRemoveUserAction;
