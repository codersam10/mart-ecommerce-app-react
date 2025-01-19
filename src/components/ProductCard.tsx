import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router";
import StarRatings from "./StarRatings";
import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { toast } from 'react-toastify';

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

const ProductCard = ({ productData }: { productData: Product }) => {
  const { id, productName, imgUrl, price, avgRating } = productData;
  const productNameTrimmed = productName
    .toLowerCase()
    .trim()
    .replaceAll(" ", "-");

  const { cartData, setCartData } = useContext(CartContext);

  const handleAddToCart = () => {
    const isAlreadyPresent = cartData.some((item) => item.id === id)
    
    if (isAlreadyPresent) {
      const updatedCartData = cartData.map((item) => {
        return item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCartData(updatedCartData);
    } else {
      setCartData([...cartData, {...productData, quantity: 1}]);
    }
    toast.success('Item added to cart!');
  };

  return (
    <div className="card shadow-lg bg-white rounded-lg overflow-hidden">
      <Link to={`/mart-ecommerce-app-react/${productNameTrimmed}/${id}`}>
        <div className="img-wrapper h-32">
          <img
            className="h-full w-full object-contain"
            src={imgUrl}
            alt={productName}
          />
        </div>
      </Link>
      <h3 className="p-3 truncate">{productName}</h3>
      <span className="ratings inline-block px-3">
        <StarRatings rating={avgRating} />
      </span>
      <div className="flex justify-between items-center pt-2 pb-8 px-5 ">
        <p className="">${price}</p>
        <button
          className="p-2 rounded-full border hover:bg-blue-950 hover:text-white active:opacity-75"
          aria-label="add product to cart"
          title="add product to cart"
          onClick={handleAddToCart}
        >
          <BsPlusLg style={{ color: "inherit" }} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
