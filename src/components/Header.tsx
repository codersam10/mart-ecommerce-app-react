import { IoBag, IoCart, IoPerson } from "react-icons/io5";
import { NavLink } from "react-router";
import LimitContentWidth from "../utils/LimitContentWidth";
const Header = () => {
  return (
    <header className="shadow-xl backdrop-blur-lg bg-[hsla(0,0%,100%,0.5)] sticky bg- top-0 left-0 right-0 z-50">
      <LimitContentWidth classNames="flex justify-between px-5 h-14">
        <div className="logo">
          <NavLink
            to="/mart-ecommerce-app-react/"
            className="flex gap-1 p-4"
          >
            <span>
              <IoBag />
            </span>
            <h1>MART</h1>
          </NavLink>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-1 h-full">
            <li>
              <NavLink
                to="/mart-ecommerce-app-react/"
                className="grid place-content-center p-4 hover:underline"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mart-ecommerce-app-react/shop"
                className="grid place-content-center p-4 hover:underline"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mart-ecommerce-app-react/cart"
                className="grid place-content-center p-4 hover:underline"
              >
                Cart
              </NavLink>
            </li>
            <li className="p-4">
              <IoPerson />
            </li>
            <li>
              <NavLink
                to="/mart-ecommerce-app-react/cart"
                className="p-4 inline-block w-full h-full"
              >
                <IoCart />
              </NavLink>
            </li>
          </ul>
        </nav>
      </LimitContentWidth>
    </header>
  );
};

export default Header;
