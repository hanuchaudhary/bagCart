import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";

const App = () => {
  return (
    <div className="relative h-full font-[Satoshi] w-full">
      <BrowserRouter>
          <Nav />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory category="Mens Clothing" />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="Womens Clothing" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="Kids Clothing" />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
