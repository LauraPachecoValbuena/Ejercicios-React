import { IMyUser } from "./reducers/myUserReducer";

type TSaveTokenAction = {
    type: "SAVE_TOKEN";
    token: string;
};

type TSaveMyUserAction = {
    type: "SAVE_MY_USER";
    myUser: IMyUser; 
}


export type TAction = TSaveTokenAction | TSaveMyUserAction;