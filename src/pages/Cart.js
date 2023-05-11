import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

function Cart() {
  const productData = useSelector((state) => state.store.productData);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.discounted_price * item.quantity;
      return price;
    });
    setAmount(price.toFixed(2));
  }, [productData]);
  return (
    <div>
      <div className="max-w-screen-xl flex mx-auto py-20">
        <CartItem />
        <div className="w-1/3 bg-orange-50 py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-600 pb-3">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4">
              Subtotal
              <span className="font-bold text-lg">${amount}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </span>
            </p>
          </div>
          <p className="font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${amount}</span>
          </p>
          <button className="bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            Proceed To Checkout
          </button>
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
    </div>
  );
}

export default Cart;
