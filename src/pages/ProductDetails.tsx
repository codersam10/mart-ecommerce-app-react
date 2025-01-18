import { useParams } from "react-router";
import { products } from "../utils/products";
import heroImg from "../images/table.jpg";
import StarRatings from "../components/StarRatings";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import LimitContentWidth from "../utils/LimitContentWidth";
type Review = {
  rating: number;
  text: string;
};

type Product = {
  id: string;
  productName: string;
  imgUrl: string;
  category: string;
  price: number;
  discount?: number;
  shortDesc: string;
  description: string;
  reviews: Review[];
  avgRating: number;
};

const ProductDetails = () => {
  const params = useParams();
  const product = products.find((product) => {
    return product?.id === params?.id;
  });

  const [productQuantity, setProductQuantity] = useState(1);
  const [isShowDescription, setIsShowDescription] = useState(true);
  // handle the case where product is not found
  if (!product) {
    return (
      <div className="h-screen grid place-content-center font-bold text-4xl">
        Sorry! Product Unavailable
      </div>
    );
  }

  const {
    productName,
    imgUrl,
    category,
    price,
    shortDesc,
    description,
    reviews,
    avgRating,
  }: Product = product;

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.valueAsNumber <= 0) {
      setProductQuantity(1);
    } else {
      setProductQuantity(event.target.valueAsNumber);
    }
  };

  return (
    <div>
      <section className="hero-img-wrapper relative h-60">
        <h1 className="absolute text-white text-3xl font-semibold top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/50">
          {productName}
        </h1>
        <img
          className="w-full h-full object-cover"
          src={heroImg}
          alt=""
        />
      </section>
      <LimitContentWidth>
        <section className="product-details grid grid-cols-1 md:grid-cols-2">
          <img
            className="w-full h-full object-contain"
            src={imgUrl}
            alt=""
          />
          <div className="pt-10">
            <h2 className="text-3xl font-semibold">{productName}</h2>
            <div className="flex items-center gap-8 pt-3">
              <StarRatings rating={avgRating} />
              <span>
                {avgRating}
                &nbsp;ratings
              </span>
            </div>
            <p className="pt-3 flex gap-8">
              <span className="font-semibold text-2xl">${price}</span>
              <span>category:{category}</span>
            </p>
            <p className="pt-3">{shortDesc}</p>
            <form
              className="flex flex-col gap-6 max-w-28 pt-10"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Added to cart " + productQuantity);
              }}
            >
              <input
                className="border border-black px-4 py-1 mr-10 rounded-md"
                type="number"
                name="quantity"
                id="quantity"
                value={productQuantity}
                onChange={handleQuantityChange}
              />
              <button
                className="bg-blue-950 text-white px-4 py-2 rounded-md"
                type="submit"
              >
                Add to cart
              </button>
            </form>
          </div>
        </section>
        <section className="description-review px-20 py-32">
          <button
            onClick={() => setIsShowDescription(true)}
            className={`${
              !isShowDescription && "text-gray-500"
            }  font-semibold mr-5`}
          >
            Description
          </button>
          <button
            onClick={() => setIsShowDescription(false)}
            className={`${isShowDescription && "text-gray-500"} font-semibold`}
          >
            Reviews({reviews.length})
          </button>
          <div className="py-5">
            {isShowDescription ? (
              <div>{description}</div>
            ) : (
              <div>
                {reviews.map((review: Review) => (
                  <div>
                    <h3>John doe</h3>
                    <p className="text-yellow-500">
                      {review?.rating} (ratings)
                    </p>
                    <p>{review?.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <section className="you-might-also-like px-20 py-18">
          <h2 className="text-3xl font-semibold">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5 pb-16">
            {products
              .filter((product) => product?.category === category)
              .map((product) => (
                <div>
                  <ProductCard productData={product} />
                </div>
              ))}
          </div>
        </section>
      </LimitContentWidth>
    </div>
  );
};
export default ProductDetails;
