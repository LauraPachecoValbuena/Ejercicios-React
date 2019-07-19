type TIncrementAction = {
  type: "INCREMENT";
};

type TDecrementAction = {
  type: "DECREMENT";
};

type TResetAction = {
  type: "RESET";
};

type TSetnumberAction = {
  type: "SETNUMBER";
  newValue: number;  //recibe un nuevo valor y lo se pasa a traves de la accion. Al newValue le decimos de que tipo va a ser en este caso number.
};

export type TAction = TIncrementAction | TDecrementAction | TResetAction | TSetnumberAction;
