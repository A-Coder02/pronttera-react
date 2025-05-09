import { Outlet } from "react-router-dom";
import Header from "./components/layout-ui/Header";
import Footer from "./components/layout-ui/Footer";

const LayoutWrapper = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
