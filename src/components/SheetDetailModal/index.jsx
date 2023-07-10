import { Modal, Button, Card } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

const ModalOne = ({
  title,
  okText = "客戶 現金付款",
  cancelText = "發送 LINE Pay付款通知",
  okAction,
  cancelAction,
  unpaid = true,
  oriCharge = 100000,
  extraCharge = true,
  linePay = 100,
  cash = 80,
  isCloseIcon = true,
  isOpen,
  remind = true,
  messageType = "LINE訊息",
}) => {
  const serviceList = [
    { name: "服務單號", value: "9403092950" },
    { name: "訂單進度", value: "可取件" },
    { name: "客戶姓名", value: "王大錘" },
    { name: "客戶聯絡電話", value: "0977XXXXXX" },
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

      <div className="flex flex-row items-start justify-center">
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

            <div className="mt-[12px] pl-[40px] pb-[8px] border-0 border-solid border-[#C4C4C4] border-b">
              {extraCharge && (
                <>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-[14px]">原始金額:</span>
                    <div className="flex flex-row items-center justify-center">
                      <span className="font-bold text-[18px]">{oriCharge}</span>
                      <span className="text-[14px] px-1">元</span>
                    </div>
                  </div>
                  <div className="my-[4px] border-[0.5px] border-dashed border-[#C4C4C4]"></div>

                  <div className="flex flex-row items-center justify-between ">
                    <span className="text-[14px]">補增款項:</span>
                    <div className="flex flex-row items-center justify-center">
                      <span className="font-bold text-[18px]">{"20"}</span>
                      <span className="text-[14px] px-1">元</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="my-[12px] text-[16px]">已付金額:</div>
            <div className="pl-[40px] pb-[8px] border-0 border-solid border-[#C4C4C4] border-b">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px]">Line Pay:</span>
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-[18px]">{linePay}</span>
                  <span className="text-[14px] px-1">元</span>
                </div>
              </div>
              <div className="my-[4px] border-[0.5px] border-dashed border-[#C4C4C4]"></div>

              <div className="flex flex-row items-center justify-between ">
                <span className="text-[14px]">現金:</span>
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-[18px]">{cash}</span>
                  <span className="text-[14px] px-1">元</span>
                </div>
              </div>
            </div>

            <div className="my-[12px] text-[16px]">服務項目:</div>
            <div className="pl-[40px] pb-[8px]">
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px]">洗衣+烘乾-60分鐘(15kg):</span>
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-[18px]">{linePay}</span>
                  <span className="text-[14px] px-1">元</span>
                </div>
              </div>
              <div className="my-[4px] border-[0.5px] border-dashed border-[#C4C4C4]"></div>

              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px]">只有洗衣-30分鐘(22kg):</span>
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-[18px]">{cash}</span>
                  <span className="text-[14px] px-1">元</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="w-1/2 flex flex-row flex-wrap items-center justify-start pl-[10px]">
          {serviceList.map((item) => (
            <div
              key={item.name}
              className="w-1/2 flex flex-col items-start justify-center pb-[24px]"
            >
              <span className="text-[16px]">{item.name}:</span>
              <span
                className={`text-[18px] font-bold pt-[8px] ${
                  item.name === "訂單進度" && "text-[#275682]"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center pt-[16px] pb-[20px]">
            <div className="flex flex-row items-center justify-center">
              {cancelAction && (
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
            </div>

            {remind && (
              <div className="text-[14px] pt-[12px]">
                客戶完成取件時，系統將發送
                <span className="font-bold px-1">{messageType}</span>
                通知客戶物件已被領取
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalOne;
