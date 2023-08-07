import { useState } from "react";
import { Button } from "antd";
import LogoImg from "../../assets/images/logo.png";
import goIcon from "../../assets/images/goIcon.svg";
import goActive from "../../assets/images/goActive.svg";
import activeHome from "../../assets/images/activeHome.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import tableIcon from "../../assets/images/tableIcon.svg";
import sheetIcon from "../../assets/images/sheetIcon.svg";
import orangeGoICon from "../../assets/images/orangeGoIcon.svg";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface RouteItem {
  name: string;
  icon: string;
  activeIcon?: string;
  route: string;
}

const SideBar = () => {
  const [active, setActive] = useState<string>("首頁");
  const pageList: RouteItem[] = [
    { name: "首頁", icon: searchIcon, activeIcon: activeHome, route: "/demo" },
    { name: "查詢門市/服務單", icon: searchIcon, route: "" },
    { name: "門市/會員資訊", icon: sheetIcon, route: "" },
    { name: "營業/會員報表", icon: tableIcon, route: "/tablePage" },
  ];

  const go = useNavigate();

  const newStore = () => {
    console.log("build new store");
  };

  const handleRoute = ({ name, route }: RouteItem) => {
    active !== name && setActive(name);
    route && go(route);
  };
  return (
    <div className="flex flex-col items-center justify-between w-[180px] xl:w-[240px] max-h-[1200px] p-[54px_8px_40px_8px]">
      <div className="flex flex-col items-center justify-start">
        <img
          className="w-[120px] xl:w-[180px] h-[38px] xl:h-[56px] mb-[33px] xl:mb-[50px]"
          src={LogoImg}
        />
        <div className="box-border w-[164px] xl:w-[190px] h-[72px] xl:h-[80px] bg-[#FFF2E7] rounded-[4px] xl:rounded-[8px] p-[12px_0_9px_12px] xl:p-[12px_0_9px_16px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start justify-center">
              <span className="text-[12px] xl:text-[14px]">未收件服務單:</span>
              <div className="flex flex-row items-center">
                <span className="text-[24px] xl:text-[28px] text-[#F87700] font-bold">
                  32
                </span>
                <span className="ml-[4px] xl:ml-[8px] text-[14px] xl:text-[16px]">
                  件
                </span>
              </div>
            </div>

            <img className="w-[24px] xl:w-[32px]" src={orangeGoICon} />
          </div>
        </div>
        <div className="h-[1px] w-full my-[24px] bg-[#D9D9D9]"></div>

        {pageList.map((item) => {
          return (
            <div
              key={item.name}
              className={`w-full flex flex-row items-center justify-between text-[14px] xl:text-[16px] p-[6px_0_6px_4px] mb-[20px] ml-[4px] xl:ml-[8px] rounded-[4px] ${
                active === item.name && "bg-navyBlue"
              }`}
              onClick={() => handleRoute(item)}
            >
              <div className="flex flex-row items-center justify-center">
                <img
                  className="w-[20px] xl:w-[24px] xl:mr-[4px]"
                  src={active === item.name ? item.activeIcon : item.icon}
                />
                <span className={`${active === item.name && "text-white"}`}>
                  {item.name}
                </span>
              </div>
              <img
                className="w-[24px] xl:w-[32px]"
                src={active === item.name ? goActive : goIcon}
              />
            </div>
          );
        })}
      </div>

      <div className="w-[140px] xl:w-[200px]">
        <Button
          block
          ghost
          className={"h-[44px] xl:h-[48px]"}
          type="primary"
          onClick={newStore}
        >
          <div className="flex flex-row items-center allCenter">
            <PlusOutlined className={"text-[20px] xl:text-[24px]"} />
            <span className="text-[14px] xl:text-[18px] ml-[4px] xl:ml-[8px]">
              建立門市/店長
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
