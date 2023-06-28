import { useState, useEffect } from "react";
import { Modal, Button, Space, Card } from "antd";

const ModalOne = ({
  title,
  okText = "確認",
  cancelText = "取消",
  isOpen,
  okAction,
  cancelAction,
}) => {
  const showTitle = () => {
    return <span className="text-[22px] pt-[12px] px-[20px]">{title}</span>;
  };
  const showFooter = () => {
    return (
      <div className="flex flex-row items-center justify-center pb-[20px]">
        <div className="w-[200px] mx-2">
          <Button block onClick={cancelAction}>
            <span className="allCenter text-[16px]">{cancelText}</span>
          </Button>
        </div>
        <div className="w-[200px] mx-2">
          <Button block type="primary" onClick={okAction}>
            <span className="allCenter text-[16px]">{okText}</span>
          </Button>
        </div>
      </div>
    );
  };

  const closeIcon = () => {};
  return (
    <Modal
      centered
      width="600px"
      title={showTitle()}
      footer={showFooter()}
      open={isOpen}
      // bodyStyle={{ padding: "20px" }}
    >
      <div className="p-[20px_20px_28px_20px]">
        <Card className={"bg-gray-400"}>
          <div className="flex flex-row items-center justify-between">
            <div className="text-[16px] font-bold">服務訂單總金額:</div>
            <div className="flex flex-row items-center justify-center">
              <div className="font-bold text-[26px]">60</div>
              <div className="text-[16px] px-1">元</div>
            </div>
          </div>
        </Card>
      </div>
    </Modal>
  );
};

export default ModalOne;
