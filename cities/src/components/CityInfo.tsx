import React from "react";
import * as actions from "../actions";
import { useEffect } from 'react';
import { IGlobalState } from '../reducers/reducers';
import { connect } from "react-redux";
import { IWeather } from '../interfaceIweather';
interface IProps {}

interface IPropsGlobal {
    cityId: number;
    setWeather: (weather: IWeather []) => void;
    weather: IWeather []
}

const CityInfo: React.FC<IProps & IPropsGlobal> = props => {

    const getWeather = () => {
        const apiKey = "&appid=da53c8f33923ebae8b5161945a223403";
        const cityId = props.cityId;
        const api = "https://api.openweathermap.org/data/2.5/weather?id=";
        fetch(
         api + cityId + apiKey
        ).then(response => {
          if (response.ok) {
            response.json().then(result => console.log(result));
          }
        });
      };

      useEffect(() => {
        getWeather();
      }, []);

      return (
           <div>
           {/* <div key={props.weather[0].id}> {props.weather[0].name} </div> */}
           </div>
      );
};

const mapStateToProps = (state: IGlobalState) => ({
    cityId: state.cityId,
    weather: state.weather
  });
  
  const mapDispachToProps = {
    setWeather: actions.setWeather
  };

  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(CityInfo);