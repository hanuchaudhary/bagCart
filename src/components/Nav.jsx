import React, { useState } from "react";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import Btns from "./Btns";
import { BsCart3 } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";


const Nav = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="sticky mt-2 z-10 opacity-85 bg-black px-5 rounded-full top-0 right-0 left-0 py-4 w-[80%] transition-transform m-auto text-white flex items-center justify-between ">
      <Link
        to={"/"}
        onClick={() => setMenu("shop")}
        className="text-xl font-bold"
      >
        UrbanBag.
      </Link>
      {/* <div className="lg:hidden md:hidden sm:block"><TiThMenu/></div> */}
      <div className="menu relative hidden bg-gray-700 py-3 px-7 rounded-3xl sm:flex gap-10 capitalize text-sm ">
        {["shop", "men", "women", "kids"].map((elem, idx) => (
          <Link
            to={`/${elem}`}
            key={idx}
            onClick={() => setMenu(elem)}
            className={`hover:text-green-500 select-nonecursor-pointer flex relative font-semibold items-center gap-1`}
          >
            {menu === elem && (
              <div className="bg-white h-11 w-20 rounded-3xl -left-7 text-black flex items-center justify-center absolute transition-transform">
                {elem}
              </div>
            )}
            {elem}
          </Link>
        ))}
      </div>
      <div className="btns flex items-center gap-4">
        <Link to={"/login"}>
          {" "}
          <Btns />{" "}
        </Link>
        <Link to={"/cart"} onClick={() => setMenu("shop")}>
          <div className="bg-white p-3 rounded-full text-black">
            <BsCart3 />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
