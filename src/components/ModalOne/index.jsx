import { useState, useEffect } from "react";
import { Modal, Button, Card } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

const ModalOne = ({
  title,
  okText = "確認",
  cancelText = "取消",
  okAction,
  cancelAction,
  unpaid = true,
  oriCharge = 100000,
  extraCharge = true,
  linePay = true,
  isCloseIcon = true,
  isOpen,
}) => {
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
      title={null}
      footer={null}
      width="940px"
      centered
      closable={isCloseIcon}
      open={isOpen}
      closeIcon={<CloseCircleFilled />}
      onCancel={cancelAction}
      maskClosable={false}
      bodyStyle={{ padding: "12px 16px 20px 16px" }}
    >
      <div className="text-[22px] font-bold pb-[20px]">{title}</div>

      <div className="flex flex-row items-center justify-center">
        <div className="w-1/2 pr-[30px]">
          {unpaid && ( //有未繳金額才會出現
            <Card
              bodyStyle={{ padding: "20px" }}
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

          <Card bodyStyle={{ padding: "20px" }} className={"bg-[#EFEFEF]"}>
            {/* border-0 border-solid border-b */}
            <div className="flex flex-row items-center justify-between">
              <span className="text-[16px] font-bold">服務單總金額:</span>
              <div className="flex flex-row items-center justify-center">
                <span className="font-bold text-[26px]">{oriCharge}</span>
                <span className="text-[16px] px-1">元</span>
              </div>
            </div>

            {extraCharge && (
              <div className="mt-[12px]">
                <div className="flex flex-row items-center justify-between ml-[40px]  border-0 border-dash border-[#C4C4C4] border-b">
                  <span className="text-[14px]">原始金額:</span>
                  <div className="flex flex-row items-center justify-center">
                    <span className="font-bold text-[18px]">{oriCharge}</span>
                    <span className="text-[14px] px-1">元</span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between ml-[40px]">
                  <span className="text-[14px]">補增款項:</span>
                  <div className="flex flex-row items-center justify-center">
                    <span className="font-bold text-[18px]">{"20"}</span>
                    <span className="text-[14px] px-1">元</span>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        <div className="w-1/2 flex flex-row flex-wrap items-center justify-center pl-[10px]">
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
