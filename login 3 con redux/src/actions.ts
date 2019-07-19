import { ActionCreator, Action } from "redux"; //éstos son tipos. Y hay que ponerlos.
import { TAction } from "./actionTypes";

//estamos creando una accion. que estamso enviando un numero.Tenemos que poner el tipo  y el nuevo número que es lo que le llega al reduce.
//Cada accion siempre llegan a todos los reduce. y con el tipo en el reduce lo busca y lo hace.
export const updateNumber: ActionCreator<Action> = (newNumber: number) => ({
  type: "UPDATE_NUMBER", //éste objeto es lo que recibe el reduce.
  newNumber
});

export const increaseNumber: ActionCreator<TAction> = () => ({
  type: "INCREASE_NUMBER" //éste objeto es lo que recibe el reduce.
});

export const reduceNumber: ActionCreator<TAction> = () => ({
  type: "REDUCE_NUMBER" //éste objeto es lo que recibe el reduce.
});

export const resetNumber: ActionCreator<TAction> = () => ({
  type: "RESET_NUMBER" //éste objeto es lo que recibe el reduce.
});

export const saveToken: ActionCreator<TAction> = (token: string) => ({
  type: "SAVE_TOKEN", //éste objeto es lo que recibe el reduce.
  token
});

export const setUsers: ActionCreator<TAction> = (users: []) => ({
    type: "SET_USERS", //éste objeto es lo que recibe el reduce.
    users
  });
