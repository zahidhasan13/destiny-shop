import bannerImg from "../../../assets/hero_image.png";
import arrow from "../../../assets/arrow.png";
const Banner = () => {
  return (
    <div className="bg-pink-300">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2">
        <div className="pt-40">
          <p className="text-xl uppercase font-bold">new arrivals only</p>
          <h2 className="text-[80px] my-8 leading-[80px]">
            new 👋 <br />
            collections <br />
            for everyone
          </h2>
          <button className="bg-orange-600 hover:bg-orange-900 px-4 py-2 rounded-full text-white font-semibold flex items-center justify-center">
            Lateast Collection
            <img src={arrow} alt="" className="ml-2" />
          </button>
        </div>
        <div className="justify-self-center">
          <img src={bannerImg} alt="" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
