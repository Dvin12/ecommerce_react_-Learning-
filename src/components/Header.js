import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const productData = useSelector((state) => state.store.productData);
  const userInfo = useSelector((state) => state.store.userInfo);
  return (
    <header className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
        <Link to="/">
          <div>
            <h1
              className="text-3xl font-bold tracking-wide  text-lime-500
           "
            >
              LOGO
            </h1>
          </div>
        </Link>
        <div>
          <ul className="flex items-center gap-8">
            <li className="cursor-pointer text-slate-800 hover:text-amber-600 transition-all duration-300">
              Home
            </li>
            <li className="cursor-pointer text-slate-800 hover:text-amber-600 transition-all duration-300">
              Pages
            </li>
            <li className="cursor-pointer text-slate-800 hover:text-amber-600 transition-all duration-300">
              Shop
            </li>
            <Link to="/cart">
              <li className="relative cursor-pointer">
                <CgShoppingCart className="text-3xl" />
                <div className="w-5 h-5 rounded-full bg-orange-500 absolute bottom-4 left-5 flex items-center justify-center">
                  <span className="text-white">{productData.length}</span>
                </div>
              </li>
            </Link>
            <Link to="/login">
              <li className="cursor-pointer">
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    userInfo
                      ? userInfo.image
                      : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-default-avatar-profile-icon-grey-photo-placeholder-99724602.jpg"
                  }
                  alt="userProfile"
                ></img>
              </li>
            </Link>
            {userInfo && (
              <p className="font-semibold text-sm">{userInfo.name}</p>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
