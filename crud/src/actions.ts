import { ActionCreator } from "redux";
import { TAction } from "./actionsTypes";
import { IMyUser } from "./reducers/myUserReducer";

export const saveToken: ActionCreator<TAction> = (token: string) => ({
    type: "SAVE_TOKEN",
    token
});

export const saveMyUser: ActionCreator<TAction> = (myUser: IMyUser) => ({
    type: "SAVE_MY_USER",
    myUser
});
