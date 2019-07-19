import { combineReducers } from 'redux';
import { tokenReducer } from './tokenReducer';
import { ICity } from '../interfaceIcity';
import { citiesReducer } from './citiesReducer';
import { cityIdReducer } from './cityIdReducer';
import { IWeather } from '../interfaceIweather';
import { weatherReducer } from './weatherReducer';


export interface IGlobalState {
    token: string;
    cities: ICity[];
    cityId: number;
    weather: IWeather[];
}

export const reducers = combineReducers<IGlobalState>({
    token: tokenReducer,
    cities: citiesReducer,
    cityId: cityIdReducer,
    weather: weatherReducer
});