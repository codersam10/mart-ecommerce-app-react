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

const withDiscount = (ProductCard: React.FC<{ productData: Product }>) => {
  return function ({
    productData,
    discount,
  }: {
    productData: Product;
    discount: number;
  }) {
    return (
      <div className="relative">
        {discount && (
          <span className="absolute top-2 left-2 bg-blue-950 px-2 text-white rounded-full">
            {discount}% off
          </span>
        )}
        <ProductCard productData={productData} />
      </div>
    );
  };
};

export default withDiscount;
