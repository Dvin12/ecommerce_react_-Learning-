import { banner_pic1, banner_pic2, banner_pic3 } from "../assets/index";
import { useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [banner_pic1, banner_pic2, banner_pic3];
  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (previous) => previous - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (previous) => previous + 1);
  };
  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="w-screen h-fit relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-auto h-full flex transition-all duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={images[0]}
            loading="priority"
          ></img>
          <img
            className="w-screen h-full object-cover"
            src={images[1]}
            loading="priority"
          ></img>
          <img
            className="w-screen h-full object-cover"
            src={images[2]}
            loading="priority"
          ></img>
        </div>
        <div
          className="absolute w-fit
        bottom-10 left-0 right-0 mx-auto flex gap-96 text-6xl text-zinc-600 "
        >
          <button
            onClick={previousSlide}
            className="w-15 h-15 border-[1px] flex items-center justify-center hover:bg-gray-500 active:bg-gray-600 transition-all duration-300 hover:cursor-pointer"
          >
            <HiArrowSmLeft></HiArrowSmLeft>
          </button>
          <button
            onClick={nextSlide}
            className="w-15 h-15 border-[1px] flex items-center justify-center hover:bg-gray-500 active:bg-gray-600 transition-all duration-300 hover:cursor-pointer"
          >
            <HiArrowSmRight></HiArrowSmRight>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
