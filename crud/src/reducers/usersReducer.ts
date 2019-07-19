import { IUser } from "../interfaceIuser";
import { TAction } from "../actionsTypes";

const initialState: IUser[] =[];

export const usersReducer = (
    state: IUser[] = initialState,
    action: TAction
): IUser[] => {
    if (action.type === "SET-USERS") {
        
    }
}