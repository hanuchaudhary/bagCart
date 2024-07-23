import React from "react";

const Btns = ({ name = "Login" }) => {
  return (
    <div
      className={`bg-white text-black inline-block rounded-3xl py-2 px-6 font-bold`}
    >
      {name}
    </div>
  );
};

export default Btns;
