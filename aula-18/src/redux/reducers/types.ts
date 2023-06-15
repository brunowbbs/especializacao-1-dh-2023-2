type ActionIncrement = {
  type: "INCREMENT";
};

type ActionDecrement = {
  type: "DECREMENT";
};

type ActionSetValue = {
  type: "SET_VALUE";
  payload: {
    numero: number;
  };
};

export type Action = ActionIncrement | ActionDecrement | ActionSetValue;
