import { images } from "../../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Review = () => {
  console.log(innerHeight);
  return (
    <section className="relative mb-[216px] px-5">
      <img
        srcSet={`${images.imageDot} 2x`}
        alt=""
        className="absolute -z-[1] bottom-0 translate-x-[90%] translate-y-[-10%]"
      />

      <div className=" mx-auto rounded-[25px] max-w-[1160px] px-5 bg-gradient-to-r to-[#67C3F3] from-[#5A98F2]">
        <div className="overflow-hidden">
          <img
            srcSet={`${images.imageDot} 2x`}
            alt=""
            className="absolute right-0 translate-x-[-100%]"
          />
          <h2 className="leading-[48px] text-[36px] font-bold text-white text-center pt-16">
            What our customer are saying
          </h2>
          <div className="border-[2px] border-white rounded-md max-w-[56px] mt-[25px] mb-[66px] mx-auto"></div>

          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={{
              enabled: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="flex">
              <SwiperSlide>
                <div className="mb-[100px] flex flex-col lg:flex-row  gap-[10px] md:gap-[40px] lg:gap-[110px] items-center">
                  <div className="flex gap-3  flex-row items-center mb-[50px] md:mb-0 md:gap-7">
                    <div className="w-[141px] h-[141px] ">
                      <img
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="w-full h-full rounded-full object-cover border border-white "
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-4 lg:text-[22px] leading-7 md:leading-[48px] text-white">
                        Edward Newgate
                      </h3>
                      <h3 className="font-normal text-[18px] leading-[48px] text-white">
                        Founder Circle
                      </h3>
                    </div>
                  </div>
                  <div className="max-w-[420px] font-normal text-[19px] leading-[30px] text-white">
                    <p>
                      {" "}
                      “Our dedicated patient engagement app and web portal allow
                      you to access information instantaneously (no tedeous
                      form, long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb-[100px] flex flex-col lg:flex-row  gap-[10px] md:gap-[40px] lg:gap-[110px] items-center">
                  <div className="flex gap-3  flex-row items-center mb-[50px] md:mb-0 md:gap-7">
                    <div className="w-[141px] h-[141px] ">
                      <img
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="w-full h-full rounded-full object-cover border border-white "
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-4 lg:text-[22px] leading-7 md:leading-[48px] text-white">
                        Edward Newgate
                      </h3>
                      <h3 className="font-normal text-[18px] leading-[48px] text-white">
                        Founder Circle
                      </h3>
                    </div>
                  </div>
                  <div className="max-w-[420px] font-normal text-[19px] leading-[30px] text-white">
                    <p>
                      {" "}
                      “Our dedicated patient engagement app and web portal allow
                      you to access information instantaneously (no tedeous
                      form, long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb-[100px] flex flex-col lg:flex-row  gap-[10px] md:gap-[40px] lg:gap-[110px] items-center">
                  <div className="flex gap-3  flex-row items-center mb-[50px] md:mb-0 md:gap-7">
                    <div className="w-[141px] h-[141px] ">
                      <img
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="w-full h-full rounded-full object-cover border border-white "
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-4 lg:text-[22px] leading-7 md:leading-[48px] text-white">
                        Edward Newgate
                      </h3>
                      <h3 className="font-normal text-[18px] leading-[48px] text-white">
                        Founder Circle
                      </h3>
                    </div>
                  </div>
                  <div className="max-w-[420px] font-normal text-[19px] leading-[30px] text-white">
                    <p>
                      {" "}
                      “Our dedicated patient engagement app and web portal allow
                      you to access information instantaneously (no tedeous
                      form, long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb-[100px] flex flex-col lg:flex-row  gap-[10px] md:gap-[40px] lg:gap-[110px] items-center">
                  <div className="flex gap-3  flex-row items-center mb-[50px] md:mb-0 md:gap-7">
                    <div className="w-[141px] h-[141px] ">
                      <img
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="w-full h-full rounded-full object-cover border border-white "
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-4 lg:text-[22px] leading-7 md:leading-[48px] text-white">
                        Edward Newgate
                      </h3>
                      <h3 className="font-normal text-[18px] leading-[48px] text-white">
                        Founder Circle
                      </h3>
                    </div>
                  </div>
                  <div className="max-w-[420px] font-normal text-[19px] leading-[30px] text-white">
                    <p>
                      {" "}
                      “Our dedicated patient engagement app and web portal allow
                      you to access information instantaneously (no tedeous
                      form, long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb-[100px] flex flex-col lg:flex-row  gap-[10px] md:gap-[40px] lg:gap-[110px] items-center">
                  <div className="flex gap-3  flex-row items-center mb-[50px] md:mb-0 md:gap-7">
                    <div className="w-[141px] h-[141px] ">
                      <img
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="w-full h-full rounded-full object-cover border border-white "
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-4 lg:text-[22px] leading-7 md:leading-[48px] text-white">
                        Edward Newgate
                      </h3>
                      <h3 className="font-normal text-[18px] leading-[48px] text-white">
                        Founder Circle
                      </h3>
                    </div>
                  </div>
                  <div className="max-w-[420px] font-normal text-[19px] leading-[30px] text-white">
                    <p>
                      {" "}
                      “Our dedicated patient engagement app and web portal allow
                      you to access information instantaneously (no tedeous
                      form, long calls, or administrative hassle) and securely”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;
