import { IoBag } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-blue-950">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-5 text-blue-200">
        <div>
          <div className="flex gap-1 py-4">
            <span>
              <IoBag style={{ color: "white" }} />
            </span>
            <h1 className="font-extrabold text-white">MART</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae maxime libero accusantium nihil. Inventore animi,
            eligendi.
          </p>
        </div>
        <div>
          <h3 className="py-4 font-bold text-white">About Us</h3>
          <p>Careers</p>
          <p>Our Stories</p>
          <p>Our Cares</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h3 className="py-4 font-bold text-white">Contact Us</h3>
          <p>Help Center</p>
          <p>How to Buy</p>
          <p>Track Your Order</p>
          <p>Corporate & Bulk</p>
          <p>Returns & Refunds</p>
        </div>
        <div>
          <h3 className="py-4 font-bold text-white">Contact Us</h3>
          <p>70 Washington Square South, New York, NY 10012, United States</p>
          <p>Email: 4V0dA@example.com</p>
          <p>Phone: +123 456 780</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
