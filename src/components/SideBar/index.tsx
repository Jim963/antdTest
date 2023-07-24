import { Button } from "antd";
import LogoImg from "../../assets/images/logo.png";
import goIcon from "../../assets/images/goIcon.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import tableIcon from "../../assets/images/tableIcon.svg";
import sheetIcon from "../../assets/images/sheetIcon.svg";
import orangeGoICon from "../../assets/images/orangeGoIcon.svg";

interface RouteItem {
  name: string;
  icon: string;
  route: string;
}

const SideBar = () => {
  const pageList: RouteItem[] = [
    { name: "查詢門市/服務單", icon: searchIcon, route: "" },
    { name: "門市/會員資訊", icon: sheetIcon, route: "" },
    { name: "營業/會員報表", icon: tableIcon, route: "" },
  ];

  const pageList_admin: RouteItem[] = [
    { name: "查詢服務單", icon: searchIcon, route: "" },
    { name: "營業報表", icon: tableIcon, route: "" },
  ];

  const newStore = () => {
    console.log("build new store");
  };
  return (
    <div className="relative w-[180px] xl:w-[240px] max-h-[1200px]">
      <div className="flex flex-col items-center justify-start px-[8px] pt-[54px]">
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
              className="w-full flex flex-row items-center justify-between text-[16px] mb-[20px]"
            >
              <div className="flex flex-row items-center justify-center">
                <img className="mr-[4px]" src={item.icon} alt="" />
                <span> {item.name}</span>
              </div>
              <img src={goIcon} />
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-[40px] w-[160px] xl:w-[200px] mx-3">
        <Button
          block
          ghost
          className={"h-[48px]"}
          type="primary"
          onClick={newStore}
        >
          <span className="allCenter text-[16px]">建立新店家</span>
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
