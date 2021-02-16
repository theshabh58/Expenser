import React from "react";

function SignUp() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          className="input-styles sm:w-1/4 w-full"
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          className="input-styles sm:w-1/4  w-full"
        ></input>
        <input
          type="text"
          placeholder="Email Address"
          className="input-styles sm:w-1/4  w-full"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="input-styles sm:w-1/3  w-full"
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-styles sm:w-1/3  w-full"
        ></input>
        <button className="btn-outline sm:w-1/3  w-full text-white">
          <i class="fas fa-user-plus text-base px-2"></i>Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
