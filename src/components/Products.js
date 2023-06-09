import React from "react";
import ProductCard from "./ProductCard";
function Products({ products }) {
  console.log(products);
  return (
    <div className="py-14">
      <div className="flex items-center flex-col gap-4">
        <h2 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Spring Sale
        </h2>
        <span className="w-60 h-[3px]  bg-black"></span>
        <p className="max-w-[800px] text-center text-gray-800">
          As the weather is getting warmer, it's the perfect time to take those
          nice, cherry blossom shots! Up to{" "}
          <span className="font-bold">30%</span> off!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-3 gap-12">
        {products.map((item) => (
          <ProductCard key={item.id} product={item}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default Products;
