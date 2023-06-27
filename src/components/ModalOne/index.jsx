import { useState, useEffect } from "react";
import { Modal, Button, Space } from "antd";

const ModalOne = ({
  title,
  okText = "確認",
  cancelText = "取消",
  isOpen,
  okAction,
  cancelAction,
}) => {
  const showTitle = () => {
    return <span className="text-[22px]">{title}</span>;
  };
  const showFooter = () => {
    return (
      <div className="flex flex-row items-center justify-center">
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
    ></Modal>
  );
};

export default ModalOne;
