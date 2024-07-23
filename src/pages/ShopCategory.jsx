import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import PCard from "../components/PCard";

function ShopCategory(props) {
  const { products } = useContext(ShopContext);

  return (
    <div className="w-[90%] m-auto my-10 sm:w-[70%] md-[80%] bg-slate-300x ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((elem, idx) => {
          if (props.category === elem.category) {
            return <PCard key={idx} value={elem} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
