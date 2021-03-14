import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";

function TabbedForm() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex justify-center flex-wrap">
      <div className="min-3/4 mx-20">
        <ul className="flex flex-row flex-wrap list-none">
          <li className="flex-auto p-4 text-center">
            <a
              className={
                "px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "bg-primary-100 text-black"
                  : "bg-white text-primary-100")
              }
              href="#signin"
              onClick={(evt) => {
                evt.preventDefault();
                setOpenTab(1);
              }}
            >
              <i className="fas fa-fingerprint fa-2x text-base mr-1"></i> Sign
              In
            </a>
          </li>
          <li className="flex-auto p-4 text-center">
            <a
              className={
                "px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 2
                  ? "bg-primary-100 text-black"
                  : "bg-white text-primary-100")
              }
              href="#signup"
              onClick={(evt) => {
                evt.preventDefault();
                setOpenTab(2);
              }}
            >
              <i className="fas fa-user-plus text-base px-2"></i> Sign Up
            </a>
          </li>
        </ul>
        <div className="w-full relative flex flex-col bg-white mb-6 shadow-lg rounded min-w-0 break-words">
          <div className="px-4 py-5 flex-auto">
            <div className="flex-auto">
              <div className={openTab === 1 ? "block" : "hidden"} id="signin">
                <i className="fas fa-3x fa-id-badge"></i>
                <h1 className="p-4 text-2xl font-medium">Welcome back!</h1>
                <SignIn />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="signup">
                <i className="fas fa-3x fa-address-card"></i>
                <h1 className="p-4 text-2xl font-medium">Create an Account.</h1>
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabbedForm;
