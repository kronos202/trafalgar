import { AiOutlineArrowDown } from "react-icons/ai";
import { images } from "../../constant";

const Feature = () => {
  return (
    <section className="relative overflow-hidden mb-[229px] md:ml-[50px] lg:ml-[135px]">
      <img
        srcSet={`${images.imageDot} 2x`}
        alt="dot image"
        className="absolute -z-[1] right-0 top-[50%] translate-y-[-150%] translate-x-[50%]"
      />
      <div className="flex flex-col mx-6 md:mx-0">
        <div className="flex flex-col md:flex-row items-center mb-[100px] md:mb-[229px] gap-6">
          <div className="lg:mr-[137px]">
            <img srcSet={`${images.illustration2} 2x`} alt="" />
          </div>
          <div className="max-w-[486px] md:max-w-[400px]">
            <h3 className="mb-4 md:mb-[26px] font-bold text-[28px] md:text-[36px] leading-[56px] text-black">
              Leading healthcare providers
            </h3>
            <div className="border-[2px] max-w-[56px] border-black rounded-xl"></div>
            <p className="mt-4 md:mt-[31px] mb-[37px] text-[18px] font-light leading-[30px] text-primarytext">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <button className="font-bold leading-[60px] text-[18px] text-primary border-primary border-[2px] px-[51px] rounded-full">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex items-center flex-col gap-10 md:flex-row">
          <div className="max-w-[420px] order-2 md:order-1">
            <h3 className="max-w-[254px] font-bold leading-[38px] text-[26px] text-black">
              Download our mobile apps
            </h3>
            <div className="border-[2px] max-w-[56px] border-black rounded-xl my-5 md:my-[30px]"></div>
            <p className="font-light text-[18px] leading-[30px] text-primarytext mb-10">
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <div className="">
              <button className="flex gap-[15px] items-center text-primary pl-[43px] pr-5 py-[21px] border-primary border-[2px] rounded-full">
                Download
                <AiOutlineArrowDown />
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img srcSet={`${images.illustration3}`} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
