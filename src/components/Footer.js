import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-gray-500 py-20 ">
      <div className=" grid grid-cols-3  items-start justify-items-center">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-bold text-white tracking-wider ">
            LOGO
          </h1>
          <ul className="flex gap-3 text-lg text-gray-400">
            <li>
              <FaTwitter className="hover:text-white duration-300 cursor-pointer"></FaTwitter>
            </li>
            <li>
              <FaInstagram className="hover:text-white duration-300 cursor-pointer"></FaInstagram>
            </li>
            <li>
              <FaFacebookF className="hover:text-white duration-300 cursor-pointer"></FaFacebookF>
            </li>
            <li>
              <FaYoutube className="hover:text-white duration-300 cursor-pointer"></FaYoutube>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Locate Us</h2>
          <ul className="flex flex-col gap-2">
            <li>La La Land, Ohio, USA</li>
            <li>Mobile: 099 6872315</li>
            <li>Mail: shoot@shoot.com</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Profile</h2>
          <ul className="flex flex-col gap-2 text-base">
            <li className="hover:text-white duration-300 cursor-pointer">
              My Account
            </li>
            <li className="hover:text-white duration-300 cursor-pointer">
              Checkout
            </li>
            <li className="hover:text-white duration-300 cursor-pointer">
              Order Tracking
            </li>
            <li className="hover:text-white duration-300 cursor-pointer">
              Help & Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
