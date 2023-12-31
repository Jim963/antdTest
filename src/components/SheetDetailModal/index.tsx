import { Modal, Button, Card, Input } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

interface Props {
  title: string;
  okText?: string;
  cancelText?: string;
  okAction?: () => void;
  cancelAction?: () => void;
  cancelSheet: boolean;
  unpaid: boolean;
  extraCharge?: boolean;
  payExtraCharge?: boolean;
  oriCharge: number | string;
  linePay: number | string;
  cash: number | string;
  isCloseIcon?: boolean;
  isOpen: boolean;
  remind: boolean;
  messageType: string;
}

interface DetailItem {
  name: string;
  value: string;
}

interface serviceItem {
  name: string;
  charge: number | string;
}

const SheetDetailModal = ({
  title,
  okText,
  cancelText,
  okAction,
  cancelAction,
  cancelSheet = true,
  unpaid,
  extraCharge,
  payExtraCharge,
  oriCharge,
  linePay,
  cash,
  isCloseIcon = true,
  isOpen,
  remind,
  messageType,
}: Props) => {
  const detailList: DetailItem[] = [
    { name: "服務單號", value: "9403092950" },
    { name: "訂單進度", value: "可取件" },
    { name: "客戶姓名", value: "王大錘" },
    { name: "客戶聯絡電話", value: "0977XXXXXX" },
    { name: "起單時間", value: "2023/06/29 10:10" },
  ];

  const serviceList: serviceItem[] = [
    { name: "洗衣+烘乾-60分鐘(15kg)", charge: "100" },
    { name: "只有洗衣-30分鐘(22kg)", charge: "200" },
    { name: "只有烘乾-45分鐘(10kg)", charge: "90" },
  ];

  return (
    <Modal
      className="min-w-[860px] xl:min-w-[940px]"
      title={null}
      footer={null}
      centered
      closable={isCloseIcon}
      open={isOpen}
      closeIcon={<CloseCircleFilled style={{ fontSize: "28px" }} />}
      onCancel={cancelAction}
      maskClosable={false}
      bodyStyle={{ padding: "12px 16px 20px 16px" }}
    >
      <div className="text-[20px] xl:text-[22px] font-bold pb-[20px]">
        {title}
      </div>

      <div className="flex flex-row items-stretch justify-center">
        <div className="w-1/2 pr-[30px]">
          {unpaid && ( //有未繳金額才會出現
            <Card
              bodyStyle={{ padding: "20px" }}
              className={"bg-[#FFECC7] mb-[15px]"}
            >
              <div className="flex flex-row items-center justify-between">
                <span className="text-14px xl:text-[16px] font-bold">
                  缺繳金額:
                </span>
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-[24px] xl:text-[26px] text-navyBlue">
                    {oriCharge}
                  </span>
                  <span className="text-[14px] xl:text-[16px] px-1">元</span>
                </div>
              </div>
            </Card>
          )}

          <Card bodyStyle={{ padding: "20px" }} className={"bg-[#EFEFEF]"}>
            {/* border-0 border-solid border-b */}
            <>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[14px] xl:text-[16px] font-bold">
                  服務單總金額:
                </span>
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-[24px] xl:text-[26px] text-navyBlue">
                    {oriCharge}
                  </span>
                  <span className="text-[14px] xl:text-[16px] px-1">元</span>
                </div>
              </div>
              <div className="mt-[12px] pl-[40px] border-0 border-solid border-[#C4C4C4] border-b">
                {extraCharge && (
                  <>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-[14px]">原始金額:</span>
                      <div className="flex flex-row items-center justify-center">
                        <span className="font-bold text-[16px] xl:text-[18px]">
                          {oriCharge}
                        </span>
                        <span className="text-[12px] xl:text-[14px] px-1">
                          元
                        </span>
                      </div>
                    </div>
                    <div className="my-[4px] border-[0.5px] border-dashed border-[#C4C4C4]"></div>

                    <div className="flex flex-row items-center justify-between ">
                      <span className="text-[14px]">補增款項:</span>
                      <div className="flex flex-row items-center justify-center">
                        <span className="font-bold text-[16px] xl:text-[18px]">
                          {"20"}
                        </span>
                        <span className="text-[12px] xl:text-[14px] px-1">
                          元
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>

            <>
              <div className="my-[12px] text-[14px] xl:text-[16px] font-bold">
                已付金額:
              </div>
              <div className="pl-[40px] pb-[8px] border-0 border-solid border-[#C4C4C4] border-b">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-[14px]">Line Pay:</span>
                  <div className="flex flex-row items-center justify-center">
                    <span className="font-bold text-[16px] xl:text-[18px]">
                      {linePay}
                    </span>
                    <span className="text-[12px] xl:text-[14px] px-1">元</span>
                  </div>
                </div>
                <div className="my-[4px] border-[0.5px] border-dashed border-[#C4C4C4]"></div>

                <div className="flex flex-row items-center justify-between ">
                  <span className="text-[14px]">現金:</span>
                  <div className="flex flex-row items-center justify-center">
                    <span className="font-bold text-[16px] xl:text-[18px]">
                      {cash}
                    </span>
                    <span className="text-[12px] xl:text-[14px] px-1">元</span>
                  </div>
                </div>
              </div>
            </>

            <>
              <div className="my-[12px] text-[14px] xl:text-[16px] font-bold">
                服務項目:
              </div>
              <div className="pl-[40px] pb-[8px]">
                {serviceList.map((item, index) => {
                  return (
                    <div key={item.name}>
                      <div className="flex flex-row items-center justify-between">
                        <span className="text-[14px]">{item.name}:</span>
                        <div className="flex flex-row items-center justify-center">
                          <span className="font-bold text-[16px] xl:text-[18px]">
                            {item.charge}
                          </span>
                          <span className="text-[12px] xl:text-[14px] px-1">
                            元
                          </span>
                        </div>
                      </div>
                      {serviceList.length !== index + 1 && (
                        <div className="my-[4px] border-[0.5px] border-dashed border-[#C4C4C4]"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          </Card>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-between pl-[10px]">
          <div className="w-full flex flex-row flex-wrap items-enter justify-start">
            {payExtraCharge ? (
              <>
                <span className="text-[14px] xl:text-[16px]">補增金額:</span>
                <Input
                  className="text-[16px] border border-solid border-[#d9d9d9] rounded-[6px] py-[6px] mt-[8px]"
                  placeholder="請輸入補增金額"
                />
              </>
            ) : (
              detailList.map((item) => (
                <div
                  key={item.name}
                  className="w-1/2 flex flex-col items-start justify-center pb-[24px]"
                >
                  <span className="text-[14px] xl:text-[16px]">
                    {item.name}:
                  </span>
                  <span
                    className={`text-[18px] font-bold pt-[8px] ${
                      item.name === "訂單進度" && "text-navyBlue"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="w-full flex flex-col items-center justify-center pt-[16px] pb-[20px]">
            <div className="w-full flex flex-row items-center justify-center">
              {cancelText && (
                <div className="w-[172px] xl:w-[200px] mx-2">
                  <Button
                    block
                    ghost
                    type="primary"
                    className={"h-[44px] xl:h-[48px]"}
                    onClick={cancelAction}
                  >
                    <span className="allCenter text-[14px] xl:text-[16px]">
                      {cancelText}
                    </span>
                  </Button>
                </div>
              )}
              {okText && (
                <div className="w-[172px] xl:w-[200px] mx-2">
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
            </div>

            {remind && (
              <div className="text-[12px] xl:text-[14px] pt-[12px]">
                {messageType === "message" && (
                  <div>
                    客戶完成取件時，系統將發送
                    <span className="font-bold px-1">LINE訊息</span>
                    通知客戶物件已被領取
                  </div>
                )}
                {messageType === "payment" && (
                  <div>
                    確認後，系統將發送
                    <span className="font-bold px-1">LINE Pay付款訊息</span>
                    通知該客戶前往付款
                  </div>
                )}
              </div>
            )}

            {cancelSheet && (
              <div className="flex flex-row items-center justify-center text-[14px] xl:text-[16px] text-[#F44336] cursor-pointer pt-[24px]">
                取消服務單
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SheetDetailModal;
