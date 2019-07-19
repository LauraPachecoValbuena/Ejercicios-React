import { TAction } from "../actionTypes";

const initialState: number = -1;

export const cityIdReducer = (
    state: number = initialState,
    action: TAction
): number => {
    if (action.type === "SET_CITY_SELECTED") {
        return action.cityId;
    }
    return state;
};