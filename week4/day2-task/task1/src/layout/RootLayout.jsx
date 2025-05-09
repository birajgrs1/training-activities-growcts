import NavHeader from "../components/NavHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <NavHeader />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
