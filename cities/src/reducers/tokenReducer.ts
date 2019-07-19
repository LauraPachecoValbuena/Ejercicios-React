import { TAction } from "../actionTypes";

const initialState: string = "";

export const tokenReducer = (
    state: string = initialState,
    action: TAction
): string => {
    if (action.type === "SAVE_TOKEN") {
        return action.token;
    }
    return state;
};