import React, { useEffect } from "react";
import * as actions from "../actions";
import { ICity } from "../interfaceIcity";
import { IGlobalState } from "../reducers/reducers";
import { connect } from "react-redux";
import { setCities } from "../actions";
import { setCitySelected } from "../actions";

interface IProps {}

interface IPropsGlobal {
  token: string;
  cities: ICity[];
  setCities: (cities: []) => void;
  setCitySelected: (cityId: number) => void;
}

const Cities: React.FC<IProps & IPropsGlobal> = props => {
  const [cityInput, setCityInput] = React.useState<string>("");

  const searchCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityInput(event.currentTarget.value);
  };

  // const getCities = () => {
  //   if (props.token) {
  //     fetch("http://192.168.100.2/cities", {
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: "Bearer " + props.token
  //       }
  //     }).then(response => {
  //       if (response.ok) {
  //         response.json().then(cities => {
  //           props.setCities(cities);
  //         });
  //       }
  //     });
  //   }
  // };

  // useEffect(() => {
  //   getCities();
  // }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <h4>Search your city:</h4>
          <input
            type="text"
            id="city"
            placeholder=""
            className="form-control"
            value={cityInput}
            onChange={searchCity}
          />
          <br />
            {props.cities
              .filter(c =>
                c.name.toLowerCase().startsWith(cityInput.toLowerCase())
              )
              .slice(0, 5)
              .map(c => (
                  <div key={c.id} className="card text-center">
                    <div className="card-body">
                      <h5 className="card-title">{c.name}</h5>
                      <p className="card-text">
                        ({c.country})
                      </p>
                      <button onClick={() => props.setCitySelected(c.id)} className="btn btn-info">
                        Let's Go
                      </button>
                    </div>
                  </div>
              ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  cities: state.cities
});

const mapDispachToProps = {
  setCities: actions.setCities,
  setCitySelected: actions.setCitySelected
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Cities);
