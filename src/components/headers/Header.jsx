import { useState } from "react";
import { images } from "../../constant";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <section className="">
      <header className="text-primarytext mt-5 md:mt-6 lg:mt-14">
        <img
          className="absolute -z-10 top-[160px] translate-x-[-30%]"
          srcSet={`${images.imageDot} 2x`}
          alt=""
        />
        <div className="max-w-[1260px] mx-auto px-5">
          <div className="flex items-center justify-between">
            <img srcSet={`${images.logo} 2x`} alt="" />
            <div className="z-50 lg:hidden">
              {navIsVisible ? (
                <AiOutlineClose
                  className="w-6 h-6"
                  onClick={navVisibilityHandler}
                />
              ) : (
                <AiOutlineMenu
                  className="w-6 h-6"
                  onClick={navVisibilityHandler}
                />
              )}
            </div>
            <div
              className={`${
                navIsVisible ? "right-0" : "-right-full"
              } bg-primary z-[49] mt-16 rounded-lg lg:mt-0 transition-all duration-300 flex fixed items-center top-0 bottom-0 flex-col justify-center w-full lg:bg-transparent lg:static lg:w-auto lg:justify-end lg:flex-row`}
            >
              <ul className="flex flex-col lg:flex-row items-center gap-10 text-[18px] text-white lg:text-primarytext">
                <li>
                  <a
                    href=""
                    className="leading-[23/18] font-normal hover:text-black hover:font-bold transition-all"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="leading-[23/18] font-normal hover:text-black hover:font-bold transition-all"
                  >
                    Find a doctor
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="leading-[23/18] font-normal hover:text-black hover:font-bold transition-all"
                  >
                    Apps
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="leading-[23/18] font-normal hover:text-black hover:font-bold transition-all"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="leading-[23/18] font-normal hover:text-black hover:font-bold transition-all"
                  >
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
