import { Outlet } from "react-router";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer.tsx";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BottomNav />
    </>
  );
};

export default App;
