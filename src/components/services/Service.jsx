import { images } from "../../constant";

const Service = () => {
  return (
    <section
      className={`mt-[80px] lg:mt-[190px] mb-[220px] bg-service-bg bg-no-repeat bg-auto bg-[-100px]`}
    >
      <div className="mx-auto px-5 max-w-[1160px]">
        <div className="text-center max-w-[952px] mx-auto">
          <h2 className="font-bold text-[36px] leading-[56/36] text-black">
            Our Services
          </h2>
          <div className="mx-auto border-[2px] border-black rounded-md w-14 mt-[26px] mb-[33px]"></div>
          <p className="font-light text-[18px] text-primarytext leading-[30px]">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className="relative mt-20 grid grid-cols-1 gap-6 lg:gap-9 lg:grid-cols-3 mx-5 md:mx-0 md:grid-cols-2">
          <img
            srcSet={`${images.imageDot} 2x`}
            alt=""
            className="absolute -z-[1] right-0 top-[50%]  translate-x-[25%] translate-y-[-50%]"
          />
          <div className="rounded-lg pl-[37px] pb-[46px] max-w-[350px] bg-white  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            <div className="pt-[36px] pb-[16px] lg:pb-[23px] lg:pt-[54px]">
              <img srcSet={`${images.img2} 2x`} alt="" className="" />
            </div>
            <h3 className="font-bold text-[24px] leading-[56px] text-black mb-[1px]">
              Search doctor
            </h3>
            <p className="text-[16px] lg:pr-[46px] pr-[36px] leading-[28px] font-light text-primarytext">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className="rounded-lg pl-[37px] pb-[46px] max-w-[350px] bg-white  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            <div className="pt-[36px] pb-[16px] lg:pb-[23px] lg:pt-[54px]">
              <img srcSet={`${images.img2} 2x`} alt="" className="" />
            </div>
            <h3 className="font-bold text-[24px] leading-[56px] text-black mb-[1px]">
              Search doctor
            </h3>
            <p className="text-[16px] lg:pr-[46px] pr-[36px] leading-[28px] font-light text-primarytext">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className="rounded-lg pl-[37px] pb-[46px] max-w-[350px] bg-white  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            <div className="pt-[36px] pb-[16px] lg:pb-[23px] lg:pt-[54px]">
              <img srcSet={`${images.img2} 2x`} alt="" className="" />
            </div>
            <h3 className="font-bold text-[24px] leading-[56px] text-black mb-[1px]">
              Search doctor
            </h3>
            <p className="text-[16px] lg:pr-[46px] pr-[36px] leading-[28px] font-light text-primarytext">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className="rounded-lg pl-[37px] pb-[46px] max-w-[350px] bg-white  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            <div className="pt-[36px] pb-[16px] lg:pb-[23px] lg:pt-[54px]">
              <img srcSet={`${images.img2} 2x`} alt="" className="" />
            </div>
            <h3 className="font-bold text-[24px] leading-[56px] text-black mb-[1px]">
              Search doctor
            </h3>
            <p className="text-[16px] lg:pr-[46px] pr-[36px] leading-[28px] font-light text-primarytext">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className="rounded-lg pl-[37px] pb-[46px] max-w-[350px] bg-white  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            <div className="pt-[36px] pb-[16px] lg:pb-[23px] lg:pt-[54px]">
              <img srcSet={`${images.img2} 2x`} alt="" className="" />
            </div>
            <h3 className="font-bold text-[24px] leading-[56px] text-black mb-[1px]">
              Search doctor
            </h3>
            <p className="text-[16px] lg:pr-[46px] pr-[36px] leading-[28px] font-light text-primarytext">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className="rounded-lg pl-[37px] pb-[46px] max-w-[350px] bg-white  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            <div className="pt-[36px] pb-[16px] lg:pb-[23px] lg:pt-[54px]">
              <img srcSet={`${images.img2} 2x`} alt="" className="" />
            </div>
            <h3 className="font-bold text-[24px] leading-[56px] text-black mb-[1px]">
              Search doctor
            </h3>
            <p className="text-[16px] lg:pr-[46px] pr-[36px] leading-[28px] font-light text-primarytext">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </div>
        <div className="mt-[40px] md:mt-[60px] lg:mt-[69px]">
          <button className="relative left-[50%] translate-x-[-50%] text-[18px] leading-[60px] font-bold px-[52px] border-[2px] border-primary rounded-full text-primary">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
