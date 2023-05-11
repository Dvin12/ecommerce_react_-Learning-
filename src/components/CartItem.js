import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/storeSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.store.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item.id)) &
                  toast.error(`${item.brand} ${item.model} is removed`)
                }
                className="text-xl text-gray-500 hover:text-red-600 duration-300 cursor-pointer"
              ></MdOutlineClose>
              <img className="w-32 h-32 object-cover" src={item.image}></img>
            </div>
            <p className="w-52">
              {item.brand} {item.model}
            </p>

            <div className="w-52 flex items-center justify-between border p-3 text-gray-500">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        id: item.id,
                        brand: item.brand,
                        model: item.model,
                        image: item.image,
                        discounted_price: item.discounted_price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        id: item.id,
                        brand: item.brand,
                        model: item.model,
                        image: item.image,
                        discounted_price: item.discounted_price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p>${item.quantity * item.discounted_price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty!")
        }
        className="bg-black text-white mt-8 ml-7 py-1 px-6 hover:bg-gray-700 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center text-gray-400 gap-1 hover:text-black duration-300">
          {" "}
          <span>
            <HiOutlineArrowLeft></HiOutlineArrowLeft>
          </span>{" "}
          Go Back
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={3000}
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

export default CartItem;
