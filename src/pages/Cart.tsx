import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { IoClose, IoAddSharp, IoRemoveOutline } from "react-icons/io5";
import LimitContentWidth from "../utils/LimitContentWidth";
const Cart = () => {
  const { cartData, setCartData } = useContext(CartContext);

  const removeFromCart = (id: string) => {
    setCartData((prevCartData) =>
      prevCartData.filter((item) => item?.id !== id)
    );
  };

  const incrementQuantity = (id: string) => {
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item?.id === id ? { ...item, quantity: item?.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    if (cartData?.find((item) => item?.id === id)?.quantity === 1) {
      removeFromCart(id);
    }
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item?.id === id && item?.quantity > 1
          ? { ...item, quantity: item?.quantity - 1 }
          : item
      )
    );
  };

  return cartData?.length <= 0 ? (
    <div className="bg-blue-50">
      <LimitContentWidth classNames="flex flex-col md:flex-row gap-5 p-16 min-h-[70vh]">
        <div className="rounded-md overflow-hidden flex flex-col gap-6 w-3/4">
          No items are added in cart
        </div>

        <div className="cart-summary bg-white rounded-md overflow-hidden p-4 w-1/4">
          <h2>Cart Summary</h2>
          <hr />
          <h3>Total Price :</h3>
          <div>
            <p>$0.00</p>
          </div>
        </div>
      </LimitContentWidth>
    </div>
  ) : (
    <div className="bg-blue-50">
      <LimitContentWidth classNames="flex flex-col md:flex-row gap-5 md:p-8 lg:p-16">
        <div className="rounded-md m-3 md:m-0 overflow-hidden flex flex-col gap-6 md:w-3/4">
          {cartData?.map((item) => (
            <div
              className="card bg-white rounded-md overflow-hidden flex"
              key={item?.id}
            >
              <img
                className="h-48 w-1/4 object-contain"
                src={item?.imgUrl}
                alt={item?.productName}
              />
              <div className="grow">
                <div className="flex justify-between p-2">
                  <h3 className="font-semibold text-xl self-center py-6">
                    {item?.productName}
                  </h3>
                  <div onClick={() => removeFromCart(item?.id)}>
                    <IoClose style={{ alignSelf: "start" }} />
                  </div>
                </div>
                <div className="flex justify-between p-2">
                  <div>
                    <span className="mr-2 text-gray-500">
                      {item?.quantity}x ${item?.price}
                    </span>
                    <span className="text-blue-950">${item?.price}</span>
                  </div>
                  <div className="flex gap-2 ">
                    <button
                      className="border border-blue-950 p-1 rounded-md"
                      onClick={() => decrementQuantity(item?.id)}
                    >
                      <IoRemoveOutline />
                    </button>
                    <button
                      className="border border-blue-950 p-1 rounded-md"
                      onClick={() => incrementQuantity(item?.id)}
                    >
                      <IoAddSharp />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary  m-3 md:m-0 bg-white rounded-md overflow-hidden p-4 md:w-1/4">
          <h2 className="font-semibold text-2xl">Cart Summary</h2>
          <hr className="mt-2 mb-4" />
          <h3>Total Price :</h3>
          <p>
            $
            {cartData?.reduce((accumulator, product) => {
              return accumulator + product.price * product.quantity;
            }, 0)}
            .00
          </p>
        </div>
      </LimitContentWidth>
    </div>
  );
};
export default Cart;
