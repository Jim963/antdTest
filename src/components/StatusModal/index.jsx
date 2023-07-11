import { Modal, Button } from "antd";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

const StatusModal = ({
  title,
  status,
  subtitle,
  okTextGhost = "使用現金收款",
  okText = "在確認一次",
  cancelText = "取消",
  isOpen,
  okAction,
  cancelAction,
  okGhostAction,
}) => {
  const showFooter = () => {
    return (
      <div className="flex flex-col items-center justify-center pt-[48px] pb-[20px]">
        <div className="flex flex-row items-center justify-center">
          {okGhostAction && (
            <div className="w-[200px] mx-3">
              <Button
                block
                ghost
                type="primary"
                className={"h-[48px]"}
                onClick={cancelAction}
              >
                <span className="allCenter text-[16px]">{cancelText}</span>
              </Button>
            </div>
          )}
          {okAction && (
            <div className="w-[200px] mx-3">
              <Button
                block
                type="primary"
                className={"h-[48px]"}
                onClick={okAction}
              >
                <span className="allCenter text-[16px]">{okText}</span>
              </Button>
            </div>
          )}
          {cancelAction && (
            <div className="w-[200px] mx-3">
              <Button block className={"h-[48px]"} onClick={cancelAction}>
                <span className="allCenter text-[16px]">{cancelText}</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const statusIcon = () => {
    switch (status) {
      case "success":
        return (
          <CheckCircleFilled
            style={{ fontSize: "90px", color: "#00BA00" }}
          ></CheckCircleFilled>
        );
        break;
      case "failed":
        return (
          <CloseCircleFilled
            style={{ fontSize: "80px", color: "#EB3125" }}
          ></CloseCircleFilled>
        );
        break;
    }
  };
  return (
    <>
      <Modal
        centered
        closable={false}
        width="600px"
        footer={showFooter()}
        open={isOpen}
        onCancel={cancelAction}
        maskClosable={false}
      >
        <div className="flex flex-col items-center justify-center">
          {status && <div className="my-[30px]">{statusIcon()}</div>}
          <span className="text-[22px] font-bold">{title}</span>
          <div className="text-[14px] pt-[12px]">{subtitle}</div>
        </div>
      </Modal>
    </>
  );
};

export default StatusModal;
