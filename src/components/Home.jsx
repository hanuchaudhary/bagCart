import React from "react";
import Btns from "./Btns";

const Home = () => {
  return (
    <div className="heroelem relative mb-10">
      <h1 className="text-3xl left-[35%] font-semibold top-[20%] absolute">
        Be bold. Be unique. Be Urban.
      </h1>
      <h1 className="left-[45%] animate-bounce top-[65%] absolute">
        <Btns name={"Scroll Down ↡"} />
      </h1>
      <img
        className="h-[90vh] w-full object-top "
        src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
    </div>
  );
};

export default Home;
