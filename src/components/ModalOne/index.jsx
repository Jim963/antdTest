import { useState, useEffect } from "react";
import { Modal, Button, Card } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

const ModalOne = ({
  title,
  oriCharge = 100000,
  extraCharge = true,
  linePay = true,
  okText = "確認",
  cancelText = "取消",
  isOpen,
  okAction,
  cancelAction,
}) => {
  const showTitle = () => {
    return (
      <span className="text-[22px] pt-[12px] px-[20px] text-[#484848]">
        {title}
      </span>
    );
  };
  const showFooter = () => {
    return (
      <div className="flex flex-col items-center justify-center pt-[40px] pb-[20px]">
        <div className="flex flex-row items-center justify-center">
          {cancelAction && (
            <div className="w-[200px] mx-3">
              <Button block onClick={cancelAction}>
                <span className="allCenter text-[16px]">{cancelText}</span>
              </Button>
            </div>
          )}
          {okAction && (
            <div className="w-[200px] mx-3">
              <Button block type="primary" onClick={okAction}>
                <span className="allCenter text-[16px]">{okText}</span>
              </Button>
            </div>
          )}
        </div>

        {linePay && (
          <div className="text-[18px] text-[#275682] font-bold pt-[25px] cursor-pointer underline underline-offset-2">
            發送 LINE PAY 付款通知
          </div>
        )}
      </div>
    );
  };

  const serviceList = [
    { name: "服務單號", value: "9403092950" },
    { name: "服務項目", value: "洗衣-16公斤 * 1" },
    { name: "客戶姓名", value: "王大錘" },
    { name: "客戶聯絡電話", value: "0977XXXXXX" },
    { name: "訂單進度", value: "已起單" },
    { name: "起單時間", value: "2023/06/29 10:10" },
  ];

  return (
    <Modal
      centered
      closable={true}
      width="600px"
      title={showTitle()}
      footer={showFooter()}
      open={isOpen}
      closeIcon={<CloseCircleFilled />}
      onCancel={cancelAction}
      // bodyStyle={{ padding: "20px" }}
    >
      <div className="px-[20px]">
        <div className="pt-[12px] pb-[28px]">
          {extraCharge && (
            <Card
              bodyStyle={{ padding: "10px 20px" }}
              className={"bg-[#F7BC58] mb-[15px]"}
            >
              <div className="flex flex-row items-center justify-between">
                <span className="text-[16px] font-bold">缺繳金額:</span>
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-[26px]">{oriCharge}</span>
                  <span className="text-[16px] px-1">元</span>
                </div>
              </div>
            </Card>
          )}

          <Card bodyStyle={{ padding: "10px 20px" }} className={"bg-[#EFEFEF]"}>
            <div className="flex flex-row items-center justify-between border-b border-black">
              <span className="text-[16px] font-bold">服務單總金額:</span>
              <div className="flex flex-row items-center justify-center">
                <span className="font-bold text-[26px]">{oriCharge}</span>
                <span className="text-[16px] px-1">元</span>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {serviceList.map((item) => (
            <div
              key={item.name}
              className="w-1/2 flex flex-col items-start justify-center pb-[18px]"
            >
              <span className="text-[16px]">{item.name}:</span>
              <span
                className={`text-[18px] font-bold pt-[8px] ${
                  item.name === "訂單進度" && "text-[#F87700]"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ModalOne;
