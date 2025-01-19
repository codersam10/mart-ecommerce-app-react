import Slider from "../components/Slider";
import FeatureCard from "../components/FeatureCard";
import ProductCard from "../components/ProductCard";
import withDiscount from "../utils/withDiscount";
import { FeaturesData, discountProducts } from "../utils/products";
import LimitContentWidth from "../utils/LimitContentWidth";

const Home = () => {
  const DiscountedCards = withDiscount(ProductCard);
  return (
    <>
      <LimitContentWidth>
        <Slider />
      </LimitContentWidth>
      <section className="features">
        <LimitContentWidth classNames=" flex flex-col md:flex-row gap-2 px-6 py-20">
          {FeaturesData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature?.icon}
              title={feature?.title}
              subtitle={feature?.subtitle}
              bgColor={feature?.bg}
            />
          ))}
        </LimitContentWidth>
      </section>
      <section className="big-discount bg-blue-50 p-10 md:p-10 lg:px-36 lg:py-24">
        <h2 className="text-2xl font-semibold text-center mb-7">
          Big Discount
        </h2>
        <LimitContentWidth classNames="grid grid-cols-1 md:grid-cols-3 gap-10">
          {discountProducts.map((product) => (
            <DiscountedCards
              key={product?.id}
              productData={product}
              discount={product?.discount}
            />
          ))}
        </LimitContentWidth>
      </section>
      <section className="new-arrivals">
        <h2 className="text-2xl font-semibold text-center mb-7">
          New Arrivals
        </h2>
        <LimitContentWidth classNames="grid grid-cols-1 md:grid-cols-3 gap-10">
          {<div></div>}
        </LimitContentWidth>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-center mb-7">Best Sales</h2>
        <LimitContentWidth classNames="grid grid-cols-1 md:grid-cols-3 gap-10">
          {<div></div>}
        </LimitContentWidth>
      </section>
    </>
  );
};

export default Home;
