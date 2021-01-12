import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import ExpenseHistroy from "./History";
import AddTransaction from "./AddTransaction";
import CurrentScope from "./CurrentScope";
import Footer from "./Footer";
import { GlobalProvider } from "../context/GlobalState";
function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center">
        <GlobalProvider>
          <Balance />
          <CurrentScope />
          <ExpenseHistroy />
          <AddTransaction />
          <Footer />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
