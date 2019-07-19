import React from 'react';
import './App.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { connect } from 'react-redux';
import { IGlobalState } from './reducers/reducers';
import LayoutPage from './components/LayoutPage';

interface IPropsGlobal {
  token: string;
}

const App: React.FC<IPropsGlobal> = props => {
  return (
    <BrowserRouter>
    {!props.token && <LoginPage />}
    {props.token && <LayoutPage  />} 
    <Redirect to="/" />
  </BrowserRouter>
  );
}

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token
});

export default connect(mapStateToProps) (App);
