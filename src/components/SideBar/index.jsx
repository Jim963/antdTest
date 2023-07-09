import { Button } from "antd";
import LogoImg from "../../assets/images/logo.png";
import goIcon from "../../assets/images/goIcon.svg";

const SideBar = () => {
  const pageList = [
    { name: "所有店家/會員資訊", route: "" },
    { name: "查詢店家/服務單", route: "" },
    { name: "營業/會員報表", route: "" },
  ];

  const newStore = () => {
    console.log("build new store");
  };
  return (
    <>
      <div className="w-[180px] xl:w-[240px] h-screen">
        <div className="flex flex-col items-start justify-start px-[24px] pt-[54px]">
          <img
            className="w-[120px] xl:w-[180px] h-[38px] xl:h-[56px] mb-[50px]"
            src={LogoImg}
            alt=""
          />
          <div className="w-[130px] xl:w-[190px] h-[80px] bg-[#FFF2E7] rounded-[8px]"></div>
          <div className="h-[1px] w-full my-[24px] bg-[#D9D9D9]"></div>

          {pageList.map((item) => {
            return (
              <div
                key={item.name}
                className="w-full flex flex-row items-center justify-between text-[16px] mb-[20px]"
              >
                <span> {item.name}</span>
                <img src={goIcon} alt="" />
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
    </>
  );
};

export default SideBar;
