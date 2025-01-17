import { Outlet } from "react-router";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer.tsx";
const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-2xl mx-auto">
        <Outlet />
      </div>
        <Footer/>
        <BottomNav />
    </>
  );
};

export default App;
