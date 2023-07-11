import { useState } from "react";
import { Modal, Button, Card, Select } from "antd";
import {
  CloseCircleFilled,
  CloseCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const ServiceModal = ({
  title = "選擇服務項目",
  okText = "確認，建立服務單",
  cancelText = "上一步",
  okAction,
  cancelAction,
  isCloseIcon = true,
  isOpen,
  remind = true,
}) => {
  const detailList = [
    { name: "客戶姓名", value: "王大錘" },
    { name: "客戶聯絡電話", value: "0977XXXXXX" },
  ];

  const serviceList = [
    { label: "洗衣+烘乾-60分鐘(15kg)", value: "W+D-60" },
    { label: "只有洗衣-30分鐘(22kg)", value: "W-30" },
    { label: "只有烘乾-45分鐘(10kg)", value: "D-45" },
  ];

  const [finalService, setFinalService] = useState([
    { name: undefined, amount: undefined },
  ]);

  const serviceChange = (value, key, index) => {
    setFinalService(
      finalService.map((item, innIndex) => {
        if (index === innIndex) {
          return {
            ...item,
            [key]: value,
          };
        } else {
          return item;
        }
      })
    );
  };

  const addFinalService = () => {
    setFinalService([...finalService, { name: undefined, amount: undefined }]);
  };
  return (
    <Modal
      title={null}
      footer={null}
      width="940px"
      centered
      closable={isCloseIcon}
      open={isOpen}
      closeIcon={<CloseCircleFilled style={{ fontSize: "28px" }} />}
      onCancel={cancelAction}
      maskClosable={false}
      bodyStyle={{ padding: "12px 16px 20px 16px" }}
    >
      <div className="text-[22px] font-bold pb-[20px]">{title}</div>

      <div className="flex flex-row items-start justify-center">
        <div className="w-1/2 pr-[20px]">
          <Card
            bodyStyle={{ padding: "20px" }}
            className={"bg-[#EFEFEF] min-h-[350px]"}
          >
            {finalService.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center justify-between mb-[12px]"
                >
                  <div className="w-[235px]">
                    {/* <span className="text-[16px]">服務項目:</span> */}

                    <Select
                      className="w-full text-[16px] font-bold border border-solid border-[#d9d9d9] rounded-[8px] py-[3px]"
                      placeholder={<span>請使用下拉選項</span>}
                      bordered={false}
                      options={serviceList}
                      value={item.name}
                      onChange={(value) => serviceChange(value, "name", index)}
                    />
                  </div>

                  <div className="w-[80px] mx-[12px]">
                    {/* <span className="text-[16px]">數量:</span> */}
                    <Select
                      className="w-full text-[16px] font-bold  border border-solid border-[#d9d9d9] rounded-[8px] py-[3px]"
                      bordered={false}
                      options={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                      ]}
                      value={item.amount}
                      onChange={(value) =>
                        serviceChange(value, "amount", index)
                      }
                    />
                  </div>

                  <CloseCircleOutlined
                    style={{ fontSize: "20px", color: "#999899" }}
                  ></CloseCircleOutlined>
                </div>
              );
            })}

            <div className="w-[150px] bg-white rounded-[4px] mt-[24px]">
              <Button
                block
                ghost
                type="primary"
                className={"h-[36px] rounded-[4px]"}
                onClick={addFinalService}
              >
                <div className="flex flex-row items-center">
                  <PlusOutlined style={{ fontSize: "24px" }} />
                  <span className="ml-[8px]"> 新增服務項目</span>
                </div>
              </Button>
            </div>
          </Card>
        </div>

        <div className="w-1/2 flex flex-row flex-wrap items-center justify-start pl-[10px]">
          {detailList.map((item) => (
            <div
              key={item.name}
              className="w-1/2 flex flex-col items-start justify-center pb-[24px]"
            >
              <span className="text-[16px]">{item.name}:</span>
              <span className="text-[18px] font-bold pt-[8px]">
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
                點選
                <span className="font-bold px-1">確認建立訂單 </span>
                後，系統將發送
                <span className="font-bold px-1">LINE Pay付款通知 </span>
                給該客戶
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;
