import { Modal, Button, Spin } from "antd";
import {
  CloseCircleFilled,
  CheckCircleFilled,
  WarningFilled,
} from "@ant-design/icons";

interface Props {
  title: string;
  status: "success" | "warning" | "failed" | "loading";
  subtitle?: string;
  payment: number | string;
  okTextGhost?: string;
  okText?: string;
  cancelText?: string;
  isOpen: boolean;
  okAction?: () => void;
  cancelAction?: () => void;
  okGhostAction?: () => void;
}

const StatusModal = ({
  title,
  status,
  subtitle,
  payment,
  okTextGhost,
  okText,
  cancelText,
  isOpen,
  okAction,
  cancelAction,
  okGhostAction,
}: Props) => {
  const showFooter = () => {
    return (
      <div className="flex flex-col items-center justify-center pt-[48px] pb-[20px]">
        <div className="flex flex-row items-center justify-center">
          {okGhostAction && (
            <div className="w-[172px] xl:w-[200px] mx-3">
              <Button
                block
                ghost
                type="primary"
                className={"h-[44px] xl:h-[48px]"}
                onClick={okGhostAction}
              >
                <span className="allCenter text-[14px] xl:text-[16px]">
                  {okTextGhost}
                </span>
              </Button>
            </div>
          )}
          {okAction && (
            <div className="w-[172px] xl:w-[200px] mx-3">
              <Button
                block
                type="primary"
                className={"h-[44px] xl:h-[48px]"}
                onClick={okAction}
              >
                <span className="allCenter text-[14px] xl:text-[16px]">
                  {okText}
                </span>
              </Button>
            </div>
          )}
          {cancelAction && (
            <div className="w-[172px] xl:w-[200px] mx-3">
              <Button
                block
                className={"h-[44px] xl:h-[48px]"}
                onClick={cancelAction}
              >
                <span className="allCenter text-[14px] xl:text-[16px]">
                  {cancelText}
                </span>
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

      case "warning":
        return (
          <WarningFilled
            style={{ fontSize: "80px", color: "#F87700" }}
          ></WarningFilled>
        );
        break;
      case "loading":
        return <Spin size="large"></Spin>;
        break;
    }
  };
  return (
    <>
      <Modal
        className="min-w-[560px] xl:min-w-[600px]"
        centered
        closable={false}
        footer={showFooter()}
        open={isOpen}
        onCancel={cancelAction}
        maskClosable={false}
      >
        <div className="flex flex-col items-center justify-center">
          {status && <div className="my-[30px]">{statusIcon()}</div>}
          <span className="text-[20px] xl:text-[22px] font-bold">{title}</span>
          {subtitle && <div className="text-[14px] pt-[12px]">{subtitle}</div>}
          {payment && (
            <div className="w-[320px] h-[68px] bg-[#FFE2AB] rounded-[4px] mt-[12px]">
              <div className="h-full flex flex-row items-center justify-center">
                <span className="text-navyBlue text-[24px] xl:text-[28px]">
                  {payment}
                </span>
                <span className="text-[16px] xl:text-[20px] pl-[2px]">元</span>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default StatusModal;
