import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useParams } from "react-router-dom";
import FullProduct from "../components/FullProduct";

function Product() {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-[80%] m-auto my-12">
      <div className="mb-10">
        <Link className="hover:underline" to={"/shop"}>Shop</Link> |{" "}
        <Link className="hover:underline" to={`/${(product.category)}`}> {product.category}</Link> |{" "}
        {product.name}
      </div>
      <FullProduct value={product} />
    </div>
  );
}

export default Product;
