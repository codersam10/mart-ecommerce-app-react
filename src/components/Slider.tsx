import { sliderData } from "../utils/products.ts";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        autoplay={true}
        autoplayDelay={2000}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            display: "none",
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            display: "none",
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 99,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {sliderData.map((item) => (
          <div
            className="slider-item flex gap-2 bg-blue-50 h-[60vh] w-screen px-4 md:px-20 lg:px-40"
            key={item.id}
          >
            <div className="flex items-center">
              <div>
                <h2 className="text-4xl font-semibold">{item.title}</h2>
                <p className="pt-10">{item.desc}</p>
                <button className="mt-6">Visit Collections</button>
              </div>
            </div>
            <div className="">
              <img
                className="h-full w-full object-contain"
                src={item.cover}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
};

export default Slider;
