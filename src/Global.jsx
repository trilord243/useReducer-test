import React, { useReducer, createContext } from "react";
import { v4 as uuid } from "uuid";

const ExpenseContext = createContext();

const initialState = {
  expenses: [
    {
      id: uuid(),
      name: "Buy milk",
      amount: 10,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        expenses: [...state.expenses, action.payload],
      };

    default:
      return {
        state,
      };
  }
};

export const ExpenseContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseContext.Provider value={[state, dispatch]}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
