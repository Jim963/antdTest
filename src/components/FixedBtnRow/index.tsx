import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const FixedBtnRow = () => {
  const test = () => {
    console.log("test");
  };
  return (
    <>
      <div className="fixed bottom-0 right-[35px] xl:right-[44px] h-[72px] xl:h-[80px] rounded-[12px_12px_0_0] bg-[#275682]">
        <div className="box-border h-full flex flex-row items-center justify-center p-[14px_28px] xl:p-[16px_20px]">
          <div className="text-[16px] xl:text-[18px] text-white ml-[9px] xl:ml-[20px]">
            客戶取件
          </div>
          <div className="h-full border-0 border-r border-solid border-white mx-[24px] xl:mx-[40px]"></div>
          <div className="text-[16px] xl:text-[18px] text-white mr-[24px] xl:mr-[40px]">
            店長收件
          </div>
          <div className="bg-white rounded-[8px] ml-[20px] ">
            <Button
              block
              ghost
              type="primary"
              className={
                "w-[136px] xl:w-[160px] h-[44px] xl:h-[48px] px-[14px] xl:px-[18px]"
              }
              onClick={test}
            >
              <div className="flex flex-row items-center">
                <PlusOutlined className={"text-[20px] xl:text-[24px]"} />
                <span className="text-[16px] xl:text-[18px] ml-[8px]">
                  建立服務單
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FixedBtnRow;
