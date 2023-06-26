import { useState, useEffect } from "react";
import { Modal } from "antd";

const ModalTwo = ({ title, isOpen, okAction, cancelAction }) => {
  return (
    <Modal
      centered
      closable
      title={title}
      open={isOpen}
      onOk={okAction}
      onCancel={cancelAction}
    ></Modal>
  );
};

export default ModalTwo;
