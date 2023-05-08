import { banner_pic1, banner_pic2, banner_pic3 } from "../assets/index";
function Banner() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <div>
        <div className="w-auto h-full flex">
          <img
            className="w-screen h-full object-cover"
            src={banner_pic1}
            loading="priority"
          ></img>
          <img className="w-screen h-full object-cover" src={banner_pic2}></img>
          <img className="w-screen h-full object-cover" src={banner_pic3}></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
