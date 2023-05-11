import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../redux/storeSlice";
import { ToastContainer, toast } from "react-toastify";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = product.model;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };

  const rootId = idString(id);

  const handleClick = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <article className="group relative">
      <div
        onClick={handleClick}
        className="w-full h-80 cursor-pointer overflow-hidden"
      >
        <img
          src={product.image}
          className="w-fit h-full object-cover group-hover:scale-110 duration-500"
        ></img>
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-base">
              {product.brand} {product.model}
            </h3>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-32 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-36 transition-transform duration-500">
              <p className="line-through text-gray-700">{product.price}</p>
              <p className="font-semibold">{product.discounted_price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    brand: product.brand,
                    model: product.model,
                    image: product.image,
                    price: product.price,
                    discounted_price: product.discounted_price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.brand} ${product.model} added`)
              }
              className="absolute z-20 w-[100px] text-gray-800 hover:text-gray-900 flex  items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-8 transition-transform duration-500 cursor-pointer"
            >
              add to cart
            </p>
          </div>
        </div>
        <div className="absolute top-4 right-0">
          <p className="bg-black text-white font-semibold px-6 py-1">SALE</p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
    </article>
  );
}

export default ProductCard;
