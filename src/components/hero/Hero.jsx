import { images } from "../../constant";

const Hero = () => {
  return (
    <section className="mt-20">
      <div className="mx-auto px-5 max-w-[1260px]">
        <div className="flex items-center flex-col md:flex-row gap-10 lg:gap-[109px] md:gap-12">
          <div className="max-w-[445px] w-full">
            <h1 className=" leading-[56/48] text-center md:text-left font-bold text-black mb-6 text-[32px] md:text-[36px] lg:text-[48px]">
              Virtual healthcare for you
            </h1>
            <p className="text-[21px] mb-5 md:mb-[45px] leading-[32/21] font-light text-primarytext">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <button className="text-[18px] font-bold leading-[60/18] text-white px-12 py-4 bg-primary rounded-full">
              Consult today
            </button>
          </div>
          <div className="lg:translate-x-[30px] scale-105">
            <img srcSet={`${images.illustration} 2x`} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
