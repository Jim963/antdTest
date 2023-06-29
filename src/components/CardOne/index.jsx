import { Card } from "antd";

const CardOne = ({ title = "本月營收", type, total, linePay, cash }) => {
  return (
    <>
      <div className="w-[260px]">
        <div className="text-[22px] font-bold text-[#484848] p-[8px]">
          {title}
        </div>
        <Card bordered={false}>
          <div className="flex flex-col items-start justify-center">
            <div className="text-[#8A8F93] text-[18px]">總計</div>
            <div className="flex flex-row items-center justify-center">
              <div className="text-[#275682] text-[28px]">120000</div>
              <span className="text-[20px] ml-[4px]">元</span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center border-0 border-solid border-[#D9D9D9] border-t pt-[12px] pb-[20px]">
            <div className="text-[#8A8F93] text-[16px]">現金</div>
            <div className="flex flex-row items-center justify-center mt-[8px]">
              <div className="text-[18px]">80000</div>
              <span className="text-[14px] ml-[4px]">元</span>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center border-0 border-dashed border-[#D9D9D9] border-t py-[12px]">
            <div className="text-[#8A8F93] text-[16px]">LINE Pay</div>
            <div className="flex flex-row items-center justify-center mt-[8px]">
              <div className="text-[18px]">40000</div>
              <span className="text-[14px] ml-[4px]">元</span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CardOne;
