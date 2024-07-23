import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const FullProduct = ({ value }) => {
  let { addToCart } = useContext(ShopContext);

  return (
    <div className="flex gap-9">
      <div className="left">
        <img
          className="h-[50vh] hover:scale-150 transition-transform duration-500 w-[50vw] object-cover border"
          src={value.image_url}
          alt=""
        />
        <div className="otherImgs flex gap-2 mt-2">
          <img
            className="h-[10vh] w-[10vw] object-cover border "
            src={value.image_url}
            alt=""
          />
          <img
            className="h-[10vh] w-[10vw] object-cover border "
            src={value.image_url}
            alt=""
          />
          <img
            className="h-[10vh] w-[10vw] object-cover border "
            src={value.image_url}
            alt=""
          />
          <img
            className="h-[10vh] w-[10vw] object-cover border "
            src={value.image_url}
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1 className="text-6xl font-bold mb-2">{`$${value.price}`}</h1>
        <h1 className="text-3xl font-semibold mb-2">{value.name}</h1>
        <h2 className="font-semibold text-gray-500 mb-2">{value.category}</h2>
        <div className="sizes flex gap-4">
          {["xs", "s", "m", "lg", "xl", "xxl"].map((elem, idx) => (
            <p
              key={idx}
              className="uppercase font-semibold select-none text-xl p-3 text-gray-700 my-7 border"
            >
              {elem}
            </p>
          ))}
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          provident dignissimos corrupti voluptate? Ullam quae quo placeat nihil
          inventore, at quas odio ipsum! Quos debitis unde inventore dignissimos
          quia non nisi nesciunt explicabo. Quo!
        </p>
        <button onClick={()=> addToCart(value.id)} className="border-2 text-lg bg-black py-2 px-6 text-white mt-4 border-gray-700">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FullProduct;
