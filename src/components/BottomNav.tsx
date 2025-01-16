import { IoCart, IoPerson } from "react-icons/io5";
import { NavLink } from "react-router";

const BottomNav = () => {
  return (
    <nav className="md:hidden sticky bottom-0 left-0 right-0 backdrop-blur-xl rounded-lg overflow-hidden">
      <ul className="flex justify-stretch h-full">
        <li className="border grow">
          <NavLink
            to="/mart-ecommerce-app-react/"
            className="grid place-content-center p-4 hover:underline"
          >
            Home
          </NavLink>
        </li>
        <li className="border grow">
          <NavLink
            to="/mart-ecommerce-app-react/shop"
            className="grid place-content-center p-4 hover:underline"
          >
            Shop
          </NavLink>
        </li>
        <li className="border grow">
          <NavLink
            to="/mart-ecommerce-app-react/cart"
            className="grid place-content-center p-4 hover:underline"
          >
            Cart
          </NavLink>
        </li>
        <li className="p-4 border grow">
          <IoPerson />
        </li>
        <li className="border grow">
          <NavLink
            to="/mart-ecommerce-app-react/cart"
            className="p-4 inline-block w-full h-full"
          >
            <IoCart />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
