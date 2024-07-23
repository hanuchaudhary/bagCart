import React from "react";
import PCard from "./PCard";
import AllProducts from "./AllProduct";

const Collection = () => {
  return (
    <div className="w-[70%] m-auto">
      <h1 className="text-4xl my-8">New Collections</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {AllProducts.map(
          (elem, idx) => elem.id < 10 && <PCard key={idx} value={elem} />
        )}
      </div>
    </div>
  );
};

export default Collection;
