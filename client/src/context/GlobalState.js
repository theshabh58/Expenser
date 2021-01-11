import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//Inital state
const backendURI = process.env.BACKEND_URI;
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

//Create a context
export const GlobalContext = createContext();

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      let res = await axios.get(backendURI + "/api/v1/transactions");
      dispatch({
        type: "GET_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: error.message,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(backendURI + `/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: error.message,
      });
    }
  }

  async function addTransaction(transaction) {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        backendURI + "/api/v1/transactions",
        transaction,
        config
      );

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.transaction,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: error.message,
      });
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
