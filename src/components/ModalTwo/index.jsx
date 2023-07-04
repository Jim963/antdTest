import { useState } from "react";
import { Modal, Button, Input } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

const ModalTwo = ({
  title,
  linePay = true,
  okText = "確認，建立服務單",
  cancelText = "上一步",
  isClose = true,
  isOpen,
  okAction,
  cancelAction,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const showTitle = () => {
    return (
      <span className="text-[22px] pt-[12px] px-[20px] text-[#484848]">
        {title}
      </span>
    );
  };
  const showFooter = () => {
    return (
      <div className="flex flex-col items-center justify-center pt-[30px] pb-[20px]">
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

  const phoneChange = (e) => {
    const { value } = e?.target;
    setPhoneNumber(value);
  };

  const nameChange = (e) => {
    const { value } = e?.target;
    setName(value);
  };

  return (
    <>
      <Modal
        centered
        closable={isClose}
        width="600px"
        title={showTitle()}
        footer={showFooter()}
        open={isOpen}
        closeIcon={<CloseCircleFilled />}
        onCancel={cancelAction}
        maskClosable={false}
      >
        <div className="flex flex-row flex-wrap items-stretch justify-start pt-[20px] pb-[24px] px-[20px]">
          <div className="w-1/2 flex flex-col items-start justify-center">
            <span className="text-[16px]">客戶姓名:</span>

            <Input
              className="text-[16px] font-bold py-[9px] mt-[5px]"
              placeholder="請輸入客戶姓名"
              value={name}
              allowClear
              onChange={nameChange}
            />
          </div>

          <div className="w-1/2">
            <div className="flex flex-col items-start justify-center pl-[25px]">
              <span className="text-[16px]">客戶聯絡電話:</span>
              <span className="text-[18px] font-bold pt-[8px]">0987654321</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-stretch justify-start px-[20px] pb-[18px]">
          <div className="w-1/2 flex flex-col items-start justify-center">
            <span className="text-[16px]">服務項目:</span>

            <Input
              className="text-[16px] font-bold py-[9px] mt-[5px]"
              placeholder="請輸入客戶姓名"
              value={name}
              allowClear
              onChange={nameChange}
            />
          </div>

          <div className="w-1/2">
            <div className="flex flex-col items-start justify-center pl-[25px]">
              <span className="text-[16px]">數量:</span>
              <span className="text-[18px] font-bold pt-[8px]">0987654321</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center px-[20px]">
          <div className="w-full flex flex-col items-start justify-center pt-[20px] pb-[18px]">
            <span className="text-[16px]">客戶聯絡電話:</span>

            <Input
              className="text-[16px] font-bold py-[9px] mr-[25px]"
              placeholder="請輸入電話號碼"
              value={phoneNumber}
              allowClear
              maxLength="10"
              showCount
              onChange={phoneChange}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalTwo;
