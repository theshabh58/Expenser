import React from "react";

function SignIn() {
  return (
    <div className="">
      <form>
        <input
          type="text"
          placeholder="Email Address"
          className="input-styles sm:w-3/4 w-full"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="input-styles sm:w-3/4 w-full"
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
