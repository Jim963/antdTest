import { Modal, Button, Card } from "antd";
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
      ></Modal>
    </>
  );
};

export default ModalTwo;
