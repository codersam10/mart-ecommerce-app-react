import React from "react";

type CartContextValue = {
  cartData: Products;
  setCartData: React.Dispatch<React.SetStateAction<Products>>;
};

type Product = {
  id: string;
  productName: string;
  imgUrl: string; 
  category: string;
  price: number;
  shortDesc: string;
  description: string;
  reviews: Review[];
  avgRating: number;
  quantity: number;
};

type Review = {
  rating: number;
  text: string;
};

type Products = Product[];

const CartContext = React.createContext<CartContextValue>({
  cartData: [],
  setCartData: () => {},
});

const CartContextComponent = ({ children }: { children: React.ReactNode }) => {
  const [cartData, setCartData] = React.useState<Products>([]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextComponent;
export { CartContext };
