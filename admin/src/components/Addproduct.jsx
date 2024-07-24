import React, { useState } from "react";
import Button from "./Button";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "",
    old_price: "",
    new_price: "",
    image: "",
  });

  const handleProductDetails = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProductDetails({ ...productDetails, image: e.target.files[0] });
  };

  const Addproduct = async () => {
    console.log(productDetails);
  };

  return (
    <div className="bg-slate-800 w-full p-10 grid grid-cols-3 gap-4">
      <h1 className="text-white col-span-3 text-3xl text-center mb-4">
        Add Product
      </h1>
      <div className="col-span-3">
        <label
          htmlFor="product_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Product Name
        </label>
        <input
          value={productDetails.name}
          onChange={handleProductDetails}
          type="text"
          name="name"
          id="product_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="old_price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Old Price
        </label>
        <input
          value={productDetails.old_price}
          onChange={handleProductDetails}
          type="text"
          name="old_price"
          id="old_price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Old price"
          required
        />
      </div>
      <div className="mx-4">
        <label
          htmlFor="new_price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          New Price
        </label>
        <input
          value={productDetails.new_price}
          onChange={handleProductDetails}
          type="text"
          name="new_price"
          id="new_price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="New price"
          required
        />
      </div>
      <div>
        <label
          htmlFor="categories"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Category
        </label>
        <select
          value={productDetails.category}
          onChange={handleProductDetails}
          name="category"
          id="categories"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>
            Choose a Category
          </option>
          <option value="mens">Mens</option>
          <option value="womens">Womens</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <div className="col-span-3">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
      <div className="col-span-3 flex justify-center mt-4">
        <div onClick={Addproduct}>
          <Button name="Add Product" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
