import { Outlet } from "react-router";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-2xl mx-auto">
        <Outlet />
        <BottomNav />
      </div>
    </>
  );
};

export default App;
