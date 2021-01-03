import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function CurrentScope() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((item) => item.amount);

  const budget = amounts
    .filter((item) => item > 0)
    .reduce((prev, curr) => (prev += curr), 0)
    .toFixed(2);

  const expenses = (
    amounts.filter((val) => val < 0).reduce((prev, curr) => (prev += curr), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="flex flex-row p-6 justify-center text-black-200">
      <div className="px-12 py-2 mx-4 bg-secondary-100 rounded shadow-md hover-shadows">
        <i class="fas fa-wallet"></i>
        <h3 className="text-xl">Budget</h3>
        <h2 id="budget" className="text-2xl font-bold">
          {"$ " + budget}
        </h2>
      </div>
      <div className="px-12 py-2 mx-4 bg-secondary-200 rounded shadow-md hover-shadows">
        <i class="fas fa-umbrella-beach"></i>
        <h3 className="text-xl">Expenses</h3>
        <h2 id="expenses" className="text-2xl font-bold">
          {"$ " + expenses}
        </h2>
      </div>
    </div>
  );
}

export default CurrentScope;
