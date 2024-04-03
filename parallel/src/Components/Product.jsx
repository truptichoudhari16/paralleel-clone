import React from "react";
import ProductInfo from "./ProductInfo";

const Product = ({ product }) => {
  return (
    <div className="w-full flex justify-center mt-16 shadow-2xl ">
      <div className="w-11/12">
        <div className="text-4xl text-center  text-gray-800 ">Our Products</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 my-16 ">
          {product.map((feature) => (
            <ProductInfo {...feature} key={feature.heading} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
