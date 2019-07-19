import { Action, ActionCreator } from 'redux';
import { TAction } from './actionTypes';
import { IWeather } from './interfaceIweather';

//creamos la acción para que se guarde el toquen. Declaramos el tipo y el token (que es el que se va a generar cnd nos registremos) que le llega al reduce. 
export const saveToken: ActionCreator<TAction> = (token: string) => ({
    type: "SAVE_TOKEN",
    token
});

export const setCities: ActionCreator<TAction> = (cities: []) => ({
    type: "SET_CITIES",
    cities
});

export const setCitySelected: ActionCreator<TAction> = (cityId: number) => ({
    type: "SET_CITY_SELECTED",
    cityId
});

export const setWeather: ActionCreator<TAction> = (weather: IWeather[]) => ({
    type: "SET_WEATHER",
    weather: weather
});