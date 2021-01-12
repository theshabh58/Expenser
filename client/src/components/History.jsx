import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function ExpenseHistroy() {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="body-styles">
      <i className="fas fa-hourglass-half"></i>
      <h2 className="pb-6">Expense History</h2>
      <div className="grid gap-5 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 justify-evenly">
        {transactions.map((items) => {
          return <Transaction key={items._id} transactions={items} />;
        })}
      </div>
    </div>
  );
}

export default ExpenseHistroy;
