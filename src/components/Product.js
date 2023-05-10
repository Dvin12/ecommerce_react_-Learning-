import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Product() {
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[500px] object-cover"
            src={details.image}
          ></img>
          <div className="absolute top-4 right-0">
            <p className="bg-black text-white font-semibold px-8 py-1">SALE</p>
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">
              {details.brand} {details.model}
            </h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-gray-500">{details.price}</p>
              <p className="text-2xl font-medium text-gray-900">
                {details.discounted_price}
              </p>
            </div>
            <p className="text-base mt-3">{details.description}</p>
            <ul className="grid grid-cols-3 my-4 text-sm text-gray-600 font-semibold ">
              <li>{details.processor}</li>
              <li>{details.ram}</li>
              <li>{details.storage}</li>
              <li>{details.sensor}</li>
              <li>{details.iso_range}</li>
            </ul>
            <div className="flex gap-4">
              <div className="w-52 flex items-center justify-between border p-3 text-gray-500">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                    -
                  </button>
                  <span>{1}</span>
                  <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                    +
                  </button>
                </div>
              </div>
              <button className="bg-black text-white py-3 px-6 active:bg-gray-800">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
