import { sliderData as carouselData } from "../utils/products.ts";
const Carousel = () => {
  return (
    <section className="flex overflow-x-scroll">
      {carouselData.map((carouselItem) => (
        <div
          className="flex w-[100vw]"
          key={carouselItem?.id}
        >
          <div>
            <h2>{carouselItem?.title}</h2>
            <p>{carouselItem?.desc}</p>
            <button>Visit Collections</button>
          </div>
          <div>
            <img
            className="w-full h-full object-contain"
              src={carouselItem?.cover}
              alt=""
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Carousel;
