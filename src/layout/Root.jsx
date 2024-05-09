import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="min-h-[calc(100vh-299px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
