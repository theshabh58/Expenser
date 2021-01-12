import React, { useState, useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { GlobalContext } from "../context/GlobalState";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Arvo",
  },
});

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [radioSelection, setRadioSelection] = useState("budget");
  const { addTransaction } = useContext(GlobalContext);

  function handleTitleEntry(event) {
    const val = event.target.value;
    setText(val);
  }

  function handleAmountEntry(event) {
    const val = event.target.value;
    setAmount(val);
  }

  function handleRadioSelection(event) {
    const val = event.target.value;
    setRadioSelection(val);
  }

  function formOnSubmit(event) {
    event.preventDefault();
    const sign = radioSelection === "expense" ? "-" : "+";
    const newTransaction = {
      text,
      amount: Number(sign + amount),
      typeOfEntry: radioSelection,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setRadioSelection(radioSelection);
  }

  return (
    <div className="body-styles font-bold border-primary-200 border-solid border-t-4">
      <i className="fas fa-cart-plus fa-2x"></i>
      <h3 className="pt-6">Add a new transaction</h3>
      <section className="text-black-200">
        <div className="container px-8  pb-24 mx-auto lg:px-4 font-normal">
          <div className="flex flex-col w-full p-8 mx-auto mt-10 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
            <form onSubmit={formOnSubmit}>
              <div className="relative pb-6">
                <ThemeProvider theme={theme}>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={radioSelection}
                    onChange={handleRadioSelection}
                  >
                    <FormControlLabel
                      value="budget"
                      control={<Radio />}
                      label="Budget"
                    />
                    <FormControlLabel
                      value="expense"
                      control={<Radio />}
                      label="Expense"
                    />
                  </RadioGroup>
                </ThemeProvider>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Title of Transaction"
                  name="transactionTitle"
                  value={text}
                  onChange={handleTitleEntry}
                  className="w-full px-4 py-2 mb-4 mr-4 text-base text-primary-200 bg-gray-100 border-transparent shadow-lg rounded-lg focus-primary"
                />
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Amount"
                    name="transactionAmount"
                    value={amount}
                    onChange={handleAmountEntry}
                    className="w-full px-4 py-2 mb-4 mr-4 text-base text-primary-200 bg-gray-100 border-transparent shadow-lg rounded-lg focus-primary"
                  />
                </div>
                <button className="bg-primary-200 text-white w-full py-2 font-semibold rounded-lg shadow-lg transition duration-700 ease-in-out hover:bg-primary-100 hover:shadow-2xl focus:outline-none focus:ring-0">
                  <i className="fas fa-plus-circle"></i> Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AddTransaction;
