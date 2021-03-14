import React from "react";
import Forms from "./Forms";
import wallet from "../assets/wallet.svg";
import Footer from "./Footer";
function LandingPage() {
  return (
    <div className="flex-col flex-auto justify-center items-center">
      <div className="pt-8 pb-6 ">
        <i className="far fa-3x fa-money-bill-alt"></i>
        <h1 className="text-6xl ">Expenser</h1>
        <h1 className="text-xl pt-4 pb-8">
          <i className="fas fa-search-dollar px-2"></i>
          Track your spending habits and stay on budget!
        </h1>
        <img
          src={wallet}
          alt="wallet-img"
          width="480px"
          height="480px"
          className="block w-50% mx-auto"
        />
      </div>
      <div>
        <Forms />
      </div>
      <div className="pt-8">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
