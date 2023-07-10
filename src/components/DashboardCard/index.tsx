import { ConfigProvider, Card } from "antd";
import { toCurrency } from "../../utils";
import React from "react";

interface Props {
  title?: string;
  type?: string;
  unit?: string;
  total?: string | number;
  linePay?: string | number;
  cash?: string | number;
}

const CardOne = ({
  title = "測試標題",
  type = "normal",
  unit = "元",
  total,
  linePay,
  cash,
}: Props) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            paddingLG: 0,
            boxShadowTertiary: "0px 3px 12px 0px rgba(0, 0, 0, 0.08)",
          },
        }}
      >
        <div className="w-[180px] xl:w-[260px]">
          <div className="text-[18px] xl:text-[22px] font-bold p-[8px]">
            {title}
          </div>
          <Card
            bordered={false}
            className="p-[10px] xl:p-[20px] rounded-[24px] shadow-xl"
          >
            <div className="flex flex-col items-start justify-center">
              <div className="text-[#8A8F93] text-[14px] xl:text-[18px]">
                總計
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="text-[#275682] text-[20px] xl:text-[28px]">
                  {toCurrency(total)}
                </div>
                <div className="text-[14px] xl:text-[20px] ml-[4px]">
                  {unit}
                </div>
              </div>
            </div>

            {type === "multi" && (
              <>
                <div className="flex flex-col items-start justify-center border-0 border-solid border-[#D9D9D9] border-t pt-[12px] pb-[20px]">
                  <div className="text-[#8A8F93] text-[14px] xl:text-[16px]">
                    現金
                  </div>
                  <div className="flex flex-row items-center justify-center mt-[8px]">
                    <div className="text-[16px] xl:text-[18px]">
                      {toCurrency(cash)}
                    </div>
                    <span className="text-[12px] xl:text-[14px] ml-[4px]">
                      元
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center border-0 border-dashed border-[#D9D9D9] border-t py-[12px]">
                  <div className="text-[#8A8F93] text-[14px] xl:text-[16px]">
                    LINE Pay
                  </div>
                  <div className="flex flex-row items-center justify-center mt-[8px]">
                    <div className="text-[16px] xl:text-[18px]">
                      {toCurrency(linePay)}
                    </div>
                    <span className="text-[12px] xl:text-[14px] ml-[4px]">
                      元
                    </span>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      </ConfigProvider>
    </>
  );
};

export default CardOne;
