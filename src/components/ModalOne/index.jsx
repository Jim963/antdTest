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
        <Button size={"large"} onClick={cancelAction}>
          {cancelText}
        </Button>
        <Button type="primary" size={"large"} onClick={okAction}>
          {okText}
        </Button>
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
