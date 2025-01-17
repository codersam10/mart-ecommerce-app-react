import Carousel from "../components/Carousel";
import FeatureCard from "../components/FeatureCard";
import ProductCard from "../components/ProductCard";
import withDiscount from "../utils/withDiscount";
import { FeaturesData, discountProducts } from "../utils/products";

const Home = () => {
  const DiscountedCards = withDiscount(ProductCard);
  return (
    <>
      <Carousel />
      <section className="features flex flex-col md:flex-row gap-2 px-6 py-20">
        {FeaturesData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature?.icon}
            title={feature?.title}
            subtitle={feature?.subtitle}
            bgColor={feature?.bg}
          />
        ))}
      </section>
      <section className="big-discount bg-blue-50 p-10 md:p-10 lg:px-36 lg:py-24">
        <h2 className="text-2xl font-semibold text-center mb-7">
          Big Discount
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {discountProducts.map((product) => (
            <DiscountedCards
              key={product?.id}
              productData={product}
              discount={product?.discount}
            />
          ))}
        </div>
      </section>
      <section className="new-arrivals">
        <h2 className="text-2xl font-semibold text-center mb-7">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-center mb-7">
          Best Sales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {}
        </div>
      </section>
    </>
  );
};

export default Home;
