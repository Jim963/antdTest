import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const FixedBtnRow = () => {
  const test = () => {
    console.log("test");
  };
  return (
    <>
      <div className="fixed bottom-0 right-[35px] xl:right-[44px] w-[420px] xl:w-[505px] h-[72px] xl:h-[80px] rounded-[12px_12px_0_0] bg-[#275682]">
        <div className="box-border h-full flex flex-row items-center justify-center p-[16px_20px]">
          <div className="text-[18px] text-white ml-[20px]">客戶取件</div>
          <div className="h-full border-0 border-r border-solid border-white mx-[40px]"></div>
          <div className="text-[18px] text-white mr-[40px]">店長收件</div>
          <div className="bg-white rounded-[8px] ml-[20px] ">
            <Button
              block
              ghost
              type="primary"
              className={"w-[160px] h-[48px] px-[18px]"}
              onClick={test}
            >
              <div className="flex flex-row items-center">
                <PlusOutlined style={{ fontSize: "24px" }} />
                <span className="text-[18px] ml-[8px]">建立服務單</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedBtnRow;
