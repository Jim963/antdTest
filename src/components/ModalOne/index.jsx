import { useState, useEffect } from "react";
import { Modal } from "antd";

const ModalOne = ({
  title,
  okText,
  cancelText,
  isOpen,
  okAction,
  cancelAction,
}) => {
  const showTitle = () => {
    return <span className="text-[22px]">{title}</span>;
  };
  return (
    <Modal
      centered
      width="600px"
      title={showTitle()}
      okText={okText}
      cancelText={cancelText}
      open={isOpen}
      onOk={okAction}
      onCancel={cancelAction}
    ></Modal>
  );
};

export default ModalOne;
