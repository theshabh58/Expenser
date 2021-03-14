import React, { useState } from "react";
import FieldEmptyError from "./Error";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCheck, setEmailCheck] = useState(true);
  const [message, setMessage] = useState("");

  function handleEmailEntry(event) {
    const value = event.target.value;
    validateEmail(value);
    setEmail(value);
  }

  function handlePasswordEntry(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function hadnleSignIn(event) {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
  }

  //Checks for valid email
  //Sets error message if invalid
  function validateEmail(email) {
    console.log("Calling validate email");
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(email)) {
      setEmailCheck(false);
      setMessage("Please enter a valid email address.");
    } else {
      setEmailCheck(true);
      setMessage("");
    }
  }

  return (
    <div className="">
      <form onSubmit={hadnleSignIn}>
        <label className="text-red-500 py-2">{emailCheck ? "" : message}</label>
        <input
          type="text"
          placeholder="Email Address"
          className="input-styles sm:w-3/4 w-full"
          onChange={handleEmailEntry}
          value={email}
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="input-styles sm:w-3/4 w-full"
          value={password}
          onChange={handlePasswordEntry}
        ></input>
        <button className="btn-outline sm:w-3/4 w-full text-white">
          <i className="fas fa-fingerprint fa-2x text-base px-2"></i>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
