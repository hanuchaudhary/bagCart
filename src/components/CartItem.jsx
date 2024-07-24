import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const CartItem = () => {
  let {
    products,
    cartElems,
    addToCart,
    delFromCart,
    removeFromCart,
    itemcount,
    totalCartValue,
  } = useContext(ShopContext);
  return (
    <div className="relative h-[80vh] md:w-[70%] w-[90%] m-auto ">
      <div  className="wrapper h-[80%] overflow-hidden border-b-2 border-b-stone-300 overflow-y-scroll ">
        {products.map((e, idx) => {
          if (cartElems[e.id] > 0) {
            return (
              <div key={idx} className=" grid grid-cols-4 lg:gap-10 gap-4 mt-10">
                <img
                  className="lg:h-[10vh] lg:w-[10vw] h-28 w-28 rounded-full object-cover"
                  src={e.image_url}
                  alt=""
                />
                <div className="details">
                  <Link to={`/product/${e.id}`} className="font-bold lg:text-xl text-sm">{e.name}</Link>
                  <h2 className="font-semibold lg:text-lg text-xs text-gray-500">{e.category}</h2>
                </div>
                <h1 className="text-center flex rounded-full select-none md:mx-4 gap-4 items-center font-semibold">
                  <span
                    onClick={() => delFromCart(e.id)}
                    className="bg-gray-300 h-7 w-7  select-none lg:text-center rounded-full font-semibold"
                  >
                    -
                  </span>
                  {cartElems[e.id]}
                  <span
                    onClick={() => addToCart(e.id)}
                    className="bg-gray-300 h-7 w-7 select-none  lg:text-center rounded-full font-semibold"
                  >
                    +
                  </span>
                </h1>
                <div className="last">
                  <h1 className="lg:text-xl text-sm font-extrabold ">{`$${
                    e.price * cartElems[e.id]
                  }`}</h1>
                  <h1
                    onClick={() => removeFromCart(e.id)}
                    className="text-red-600 font-semibold underline select-none hover:text-red-500"
                  >
                    remove
                  </h1>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="cartTotal absolute lg:bottom-0 right-0 mt-5 lg:right-36">
        <div className="details flex items-center gap-20">
          <div className="text">
            <h1 className="text-xl font-bold">Sub-Total</h1>
            <h2 className="font-semibold text-gray-500">{itemcount()} items</h2>
          </div>
          <h1 className="text-4xl font-bold">${totalCartValue()}</h1>
        </div>
        <button className="font-bold w-full mt-6 text-lg bg-blue-300 rounded-full px-8 py-1">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
