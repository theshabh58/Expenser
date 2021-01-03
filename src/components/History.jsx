import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function ExpenseHistroy() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="body-styles">
      <i class="fas fa-hourglass-half"></i>
      <h2 className="pb-6">Expense History</h2>
      <div className="grid gap-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-2">
        {transactions.map((items) => {
          return <Transaction key={items.id} transactions={items} />;
        })}
      </div>
    </div>
  );
}

export default ExpenseHistroy;
