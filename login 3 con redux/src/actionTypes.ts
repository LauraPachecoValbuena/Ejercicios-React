type TIncreaseNumberAction = {
  type: "INCREASE_NUMBER";
};

type TReduceNumberAction = {
  type: "REDUCE_NUMBER";
};

type TResetNumberAction = {
  type: "RESET_NUMBER";
};

type TSaveTokenAction = {
  type: "SAVE_TOKEN";
  token: string;
};

type TSetUsersAction = {
    type: "SET_USERS";
    users: [];
  };

export type TAction =
  | TIncreaseNumberAction
  | TReduceNumberAction
  | TResetNumberAction
  | TSaveTokenAction
  | TSetUsersAction;
