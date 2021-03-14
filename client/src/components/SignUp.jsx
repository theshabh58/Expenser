import React, { useState } from "react";
import FieldEmptyError from "./Error";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleNameEntry(event) {
    const name = event.target.value;
    setName(name);
  }

  function handleEmailEntry(event) {
    const email = event.target.value;
    setEmail(email);
  }

  function handlePasswordEntry(event) {
    const password = event.target.value;
    setPassword(password);
  }

  function handleConfirmPasswordEntry(event) {
    const confirmPass = event.target.value;
    setConfirmPassword(confirmPass);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const signUpPayload = {
      name,
      email,
      password,
    };
    console.log(signUpPayload);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input-styles sm:w-1/2 w-full"
          value={name}
          onChange={handleNameEntry}
        ></input>
        <input
          type="text"
          placeholder="Email Address"
          className="input-styles sm:w-1/2  w-full"
          value={email}
          onChange={handleEmailEntry}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="input-styles sm:w-1/2  w-full"
          value={password}
          onChange={handlePasswordEntry}
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-styles sm:w-1/2  w-full"
          value={confirmPassword}
          onChange={handleConfirmPasswordEntry}
        ></input>
        <button className="btn-outline sm:w-1/2  w-full text-white">
          <i className="fas fa-user-plus text-base px-2"></i>Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
