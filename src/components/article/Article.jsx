import { AiOutlineArrowRight } from "react-icons/ai";
import { images } from "../../constant";

const Article = () => {
  return (
    <section className="mb-[201px] bg-article-bg bg-no-repeat bg-right bg-auto">
      <div className="max-w-[1160px] px-5 mx-auto">
        <h2 className="text-black text-center font-bold text-[36px] leading-[56px]">
          Check out our latest article
        </h2>
        <div className="border-[2px] text-[#000000] max-w-[56px] rounded-md mt-[26px] mb-[79px] mx-auto"></div>
        <div className="grid-cols-1 lg:grid-cols-3 grid gap-[35px]">
          <img
            srcSet={`${images.imageDot} 2x`}
            className="absolute -z-[1] translate-x-[-35%] translate-y-[-35%]"
            alt=""
          />
          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-3xl">
            <div className="h-[240px] block">
              <img
                src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt=""
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
            <div className="mx-6 mb-[35px]  lg:mx-8">
              <h3 className="font-bold text-[21px] mt-6 leading-[32px] text-black">
                Disease detection, check up in the laboratory
              </h3>
              <p className="mt-3 mb-6 font-light text-[16px] leading-[28px]">
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
              <div>
                <a
                  href="/"
                  className="cursor-pointer font-semibold text-[17px] leading-[28px] text-primary flex gap-3 items-center"
                >
                  Read more
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-3xl">
            <div className="h-[240px] block">
              <img
                src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt=""
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
            <div className="mx-6 mb-[35px]  lg:mx-8">
              <h3 className="font-bold text-[21px] mt-6 leading-[32px] text-black">
                Disease detection, check up in the laboratory
              </h3>
              <p className="mt-3 mb-6 font-light text-[16px] leading-[28px]">
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
              <div>
                <a
                  href="/"
                  className="cursor-pointer font-semibold text-[17px] leading-[28px] text-primary flex gap-3 items-center"
                >
                  Read more
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-3xl">
            <div className="h-[240px] block">
              <img
                src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt=""
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
            <div className="mx-6 mb-[35px]  lg:mx-8">
              <h3 className="font-bold text-[21px] mt-6 leading-[32px] text-black">
                Disease detection, check up in the laboratory
              </h3>
              <p className="mt-3 mb-6 font-light text-[16px] leading-[28px]">
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
              <div>
                <a
                  href="/"
                  className="cursor-pointer font-semibold text-[17px] leading-[28px] text-primary flex gap-3 items-center"
                >
                  Read more
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="border-[2px] mt-[72px] border-primary font-bold text-[18px] leading-[60px] px-16 rounded-full text-primary relative md:left-[40%] translate-y-[-40%] left-[20%]">
          View all
        </button>
      </div>
    </section>
  );
};

export default Article;
