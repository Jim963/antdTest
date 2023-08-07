import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import FixedBtnRow from "../components/FixedBtnRow";

const BasicLayout = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="bg-[#F8F8F8] w-full">
        <div className="box-border w-full px-[35px] xl:px-[44px] pb-[120px]">
          <div className="flex flex-col items-center justify-start">
            <Header />

            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <FixedBtnRow></FixedBtnRow>
    </div>
  );
};

export default BasicLayout;
