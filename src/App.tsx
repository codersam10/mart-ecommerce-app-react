import { Outlet } from "react-router";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer.tsx";
import { ToastContainer, Flip } from "react-toastify";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BottomNav />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </>
  );
};

export default App;
