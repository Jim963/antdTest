import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const BasicLayout = () => {
  const go = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-row">
      <SideBar />
      <div className="flex flex-col items-center bg-[#F8F8F8] w-full">
        <div className="box-border w-full px-[44px] pb-[120px]">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BasicLayout;
