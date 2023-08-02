import { Select } from "antd";

const Header = () => {
  const storeChange = () => {};
  return (
    <>
      <div className="w-full p-[48px_0_12px_0] xl:p-[46px_0_22px_0]">
        <div className="h-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <span className="h-[24px] xl:h-[32px] border-4 border-solid border-navyBlue"></span>
            <span className="text-[22px] xl:text-[32px] font-bold px-[8px]">
              Page Name
            </span>
          </div>

          <div className="flex flex-row items-center justify-center">
            <Select
              className="w-[200px] xl:w-[220px] text-[16px] font-bold border border-solid border-[#d9d9d9] rounded-[8px] py-[3px]"
              placeholder={<span>請使用下拉選項</span>}
              bordered={false}
              options={[
                { value: "storeOne", label: "台中市北屯忠泰門市" },
                { value: "storeTwo", label: "台北市大同區南京門市" },
              ]}
              onChange={storeChange}
            />

            <Select
              className="w-[140px] xl:w-[160px] text-[16px] font-bold border border-solid border-[#d9d9d9] rounded-[8px] py-[3px] ml-[8px]"
              placeholder={<span>請使用下拉選項</span>}
              bordered={false}
              options={[
                { value: "nameOne", label: "朱嘖藝" },
                { value: "nameTwo", label: "朱不義" },
              ]}
              onChange={storeChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
