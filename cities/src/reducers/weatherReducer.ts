import { IWeather } from "../interfaceIweather";
import { TAction } from "../actionTypes";


const initialState: IWeather[] = [];

export const weatherReducer = (
    state: IWeather[] = initialState,
    action: TAction
): IWeather[] => {
    if (action.type === "SET_WEATHER") {
        return action.weather;
    }
    return state;
};