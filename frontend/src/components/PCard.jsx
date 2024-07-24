import React from "react";
import { Link } from "react-router-dom";

function PCard({ value }) {
  return (
    <Link to={`/product/${value.id}`}
    onClick={window.scrollTo(0,0)}
    className="h-52 w-40 sm:h-72 sm:w-56 mb-16 sm:mb-6 shadow-sm">
      <div className="h-[65%] overflow-hidden">
        <img className="" src={value.image_url} alt="" />
      </div>
      <div className="details pt-3">
        <h1 className="lg:text-lg text:sm font-bold">{value.name}</h1>
        <h2 className="lg:text-sm text:xs font-bold text-gray-500">{value.category}</h2>
        <h1 className="lg:text-md font-semibold">{`$${value.price}`}</h1>
      </div>
    </Link>
  );
}

export default PCard;
