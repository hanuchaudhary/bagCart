import React, { useState } from "react";
import Btns from "../components/Btns";

function OnlyLogin({value}) {
  return (
    <div className=" bg-gray-100 relative rounded-3xl text-white w-[60%] m-auto flex items-center justify-between h-[50vh] drop-shadow-2xl mt-20 mb-20 p-5 ">
      <div className="left">
        <h1 className="text-6xl text-black font-bold select-none">Login</h1>
        <p className="mt-2 text-black">Login to your Account</p>
      </div>
      <div className="details absolute right-0 gap-6 flex flex-col h-full items-center justify-center overflow-hidden rounded-3xl px-8 shadow-md bg-black">
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
        <Btns name="Login" />
        <p className="">
          Not have an account?{" "}
          <span className="text-green-500 underline">{value}</span>
        </p>
      </div>
    </div>
  );
}

export default OnlyLogin;
