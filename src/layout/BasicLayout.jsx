import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const BasicLayout = () => {
  const go = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-row">
      <SideBar />
      <div className="flex flex-col items-start">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default BasicLayout;