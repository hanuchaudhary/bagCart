import React, { useState } from "react";
import Btns from "../components/Btns";
import OnlyLogin from "../components/OnlyLogin";

function LoginSignup() {
  const [login, setLogin] = useState("signup");

  return (
    <>
      {login === "login" ? (
        <OnlyLogin value={"SignUp"} />
      ) : (
        <div className=" bg-gray-100 relative rounded-3xl text-white w-[60%] m-auto flex items-center justify-between h-[50vh] drop-shadow-2xl mt-20 mb-20 p-5 ">
          <div className="left">
            <h1 className="text-6xl text-black font-bold select-none">
              SignUp
            </h1>
            <p className="mt-2 text-black">Create a new Account</p>
          </div>
          <div className="details absolute right-0 gap-6 flex flex-col h-full items-center justify-center overflow-hidden rounded-3xl px-8 shadow-md bg-black">
            <input
              className="w-96 h-12  outline-none border-none text-black text-lg px-4 font-semibold rounded-full"
              type="text"
              placeholder="full name"
            />
            <input
              className="w-96 h-12 outline-none border-none text-black text-lg px-4 font-semibold rounded-full"
              type="email"
              placeholder="email"
            />
            <input
              className="w-96 h-12 outline-none border-none text-black text-lg px-4 font-semibold rounded-full"
              type="password"
              placeholder="password"
            />
            <Btns name="SignUp" />
            <p className="">
              Already have an account?
              <span
                value={"signup"}
                onClick={() => setLogin("login")}
                className="text-green-500 underline px-1 cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginSignup;
