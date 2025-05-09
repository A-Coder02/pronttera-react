import { Outlet } from "react-router-dom";
import Header from "./components/layout-ui/Header";

const LayoutWrapper = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutWrapper;
