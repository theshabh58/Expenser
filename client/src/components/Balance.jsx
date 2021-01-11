import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import numberWithCommas from "../utils/format";
function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const totalAmount = amounts
    .reduce((prevValue, currentValue) => (prevValue += currentValue), 0)
    .toFixed(2);

  const balanceColor =
    totalAmount >= 0
      ? "px-20 py-4 rounded shadow-md hover-shadows bg-primary-100 "
      : "px-20 py-4 rounded shadow-md hover-shadows bg-secondary-200";

  return (
    <div className="body-styles flex justify-center">
      <div className={balanceColor}>
        <i class="fas fa-balance-scale"></i>
        <h2 className="text-black-200 text-2xl">Current Balance</h2>
        <h2 id="balance" className="font-bold text-2xl">
          {"$ " + numberWithCommas(totalAmount)}
        </h2>
      </div>
    </div>
  );
}

export default Balance;
