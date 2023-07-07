import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const BasicLayout = () => {
  const go = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-row">
      <SideBar />
      <div className="flex flex-col items-start bg-[#F8F8F8] w-[calc(100%-240px)] px-[44px] pb-[120px]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default BasicLayout;
