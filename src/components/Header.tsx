import { serviceData } from "../utils/products";
import { IoBag, IoCart, IoPerson } from "react-icons/io5";
import { NavLink } from "react-router";
const Header = () => {
  console.log(serviceData);

  return (
    <header className=" shadow-xl">
      <div className="flex justify-between px-5 h-14 max-w-screen-2xl mx-auto">
        <div className="logo">
          <NavLink
            to="/"
            className="flex gap-1 p-4"
          >
            <span><IoBag /></span>
            <h1>MART</h1>
          </NavLink>
        </div>
        <nav>
          <ul className="flex gap-1 h-full">
            <li>
              <NavLink
                to="/"
                className="grid place-content-center p-4 hover:underline"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="grid place-content-center p-4 hover:underline"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
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
                to="/cart"
                className="p-4 inline-block w-full h-full"
              >
                <IoCart />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
