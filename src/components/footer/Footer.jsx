import { images } from "../../constant";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-[#5A98F2] to-[#67C3F3]">
        <img
          srcSet={`${images.imageDot} 2x`}
          alt=""
          className="absolute bottom-0 translate-x-[-20%] translate-y-[20%]"
        />
        <img
          srcSet={`${images.imageDot} 2x`}
          alt=""
          className="absolute z-50 right-0 translate-x-[-20%] top-[-20%]"
        />
        <div className="pt-[118px] px-10 md:pl-20 lg:pl-[190px] pb-14 lg:pb-[113px] flex flex-col lg:flex-row gap-5">
          <div className="max-w-[391px]">
            <img srcSet={`${images.logoWhite} 2x`} alt="" />
            <p className=" font-light text-white text-[18px] leading-[28px] mt-4 mb-8">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <span className="text-white font-light text-[16px] leading-[28px]">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-[111px] md:20 lg:ml-[145px]">
            <div className="flex flex-col">
              <h3 className="font-bold text-[20px] leading-[60px] text-white">
                Company
              </h3>
              <span className="text-[18px] leading-[38px] font-light text-white">
                About
              </span>
              <span className="text-[18px] leading-[38px] font-light text-white">
                Testimonials Apps
              </span>
              <span className="text-[18px] leading-[38px] font-light text-white">
                Find a doctor
              </span>
              <span className="text-[18px] leading-[38px] font-light text-white">
                Apps
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-[20px] leading-[60px] text-white">
                Company
              </h3>
              <span className="text-[18px] leading-[38px] font-light text-white">
                About
              </span>
              <span className="text-[18px] leading-[38px] font-light text-white">
                Testimonials Apps
              </span>
              <span className="text-[18px] leading-[38px] font-light text-white">
                Find a doctor
              </span>
              <span className="text-[18px] leading-[38px] font-light text-white">
                Apps
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-[20px] leading-[60px] text-white">
                Company
              </h3>
              <span className="text-[18px] leading-[38px] font-light text-white">
                About
              </span>
              <span className="text-[18px] leading-[38px] font-light text-white">
                Testimonials Apps
              </span>
              <span className="text-[18px] leading-[38px] font-light text-white">
                Find a doctor
              </span>
              <span className="text-[18px] leading-[38px] font-light text-white">
                Apps
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
