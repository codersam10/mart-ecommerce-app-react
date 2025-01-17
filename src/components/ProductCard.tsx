import { FaStar } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { createElement } from "react";
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
  discount: number;
  shortDesc: string;
  description: string;
  reviews: Review[];
  avgRating: number;
};

const ProductCard = ({ productData }: { productData: Product }) => {
  const { productName, imgUrl, price, avgRating } = productData;

  return (
    <div className="card shadow-lg bg-white rounded-lg overflow-hidden">
      <div className="img-wrapper h-32">
        <img
          className="h-full w-full object-contain"
          src={imgUrl}
          alt={productName}
        />
      </div>
      <h3 className="p-3 truncate">{productName}</h3>
      <span className="ratings flex h-10 p-3">
        {Array(Math.round(avgRating))
          .fill(0)
          .map((_, index) =>
            createElement(FaStar, { key: index, style: { color: "hsl(50, 100%, 50%)" } })
          )}
      </span>
      <div className="flex justify-between items-center pt-2 pb-8 px-5 ">
        <p className="">${price}</p>
        <button
          className="p-2 rounded-full border hover:bg-blue-950 hover:text-white active:opacity-75"
          aria-label="add product to cart"
          title="add product to cart"
        >
          <BsPlusLg style={{ color: "inherit" }} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
