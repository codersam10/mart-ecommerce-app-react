import Carousel from "../components/Carousel";
import FeatureCard from "../components/FeatureCard";
import { FeaturesData } from "../utils/products";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="flex flex-col md:flex-row gap-2 px-6 py-20">
        {FeaturesData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature?.icon}
            title={feature?.title}
            subtitle={feature?.subtitle}
            bgColor={feature?.bg}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
