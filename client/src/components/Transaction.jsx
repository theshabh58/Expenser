import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { GlobalContext } from "../context/GlobalState";
import numberWithCommas from "../utils/format";

function Transaction(props) {
  const type = props.transactions.typeOfEntry;
  const title = props.transactions.text;
  const amount = props.transactions.amount;

  const { deleteTransaction } = useContext(GlobalContext);
  const cardTitle = title + ": $";
  const cardAmount = numberWithCommas(Math.abs(amount).toFixed(2));
  const red =
    "bg-red-50 rounded p-2 shadow-md border-r-8 border-secondary-200 hover:bg-red-200 transition duration-200 ease-in w-auto";
  const green =
    "bg-green-50 rounded p-2 shadow-md border-r-8 border-secondary-100 hover:bg-green-200 transition duration-200 ease-in w-60 w-auto";

  return (
    <div className={type === "budget" ? green : red}>
      <div className="relative float-right">
        <IconButton
          color="secondary"
          size="small"
          onClick={() => {
            deleteTransaction(props.transactions._id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="relative float-left">
        <p className="text-base">{cardTitle + cardAmount}</p>
      </div>
    </div>
  );
}

export default Transaction;
