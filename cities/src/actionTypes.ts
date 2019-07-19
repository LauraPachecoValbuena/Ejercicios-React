import { IWeather } from "./interfaceIweather";

type TSaveTokenAction = {
    type: "SAVE_TOKEN";
    token: string;
};

type TSetCitiesAction = {
    type: "SET_CITIES";
    cities: [];
};

type TSetCitYSelected = {
    type: "SET_CITY_SELECTED";
    cityId: number;
};

type TSetWeather = {
    type: "SET_WEATHER";
    weather: IWeather[];
}

export type TAction = TSaveTokenAction | TSetCitiesAction | TSetCitYSelected | TSetWeather;