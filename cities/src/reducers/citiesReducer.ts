import { ICity } from "../interfaceIcity";
import { TAction } from "../actionTypes";
import jsonfile from "../cities.json";

const citiesIni : any = jsonfile;
// const initialState: ICity[] = [];

export const citiesReducer = (
    state: ICity[] = citiesIni,
    action: TAction
): ICity[] => {
    if (action.type === "SET_CITIES") {
        return action.cities;
    }
    return state;
};