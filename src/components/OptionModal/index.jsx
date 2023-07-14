import { useState } from "react";
import { Modal, Button, Input, Select } from "antd";
import {
  CloseCircleFilled,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const OptionModal = ({
  type = "account",
  title,
  okText = "綁定",
  cancelText = "上一步",
  isCloseIcon = true,
  isOpen,
  okAction,
  cancelAction,
}) => {
  const showTitle = () => {
    return <div className="text-[22px] pt-[12px] px-[16px]">{title}</div>;
  };
  const showFooter = () => {
    return (
      <div className="flex flex-col items-center justify-center pt-[30px] pb-[20px]">
        <div className="flex flex-row items-center justify-center">
          {cancelAction && (
            <div className="w-[200px] mx-3">
              <Button block className={"h-[48px]"} onClick={cancelAction}>
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
      </div>
    );
  };

  const [optionData, setOptionData] = useState([
    { account: undefined, price: undefined, service: undefined },
  ]);

  const addOption = () => {
    setOptionData([
      ...optionData,
      { account: undefined, price: undefined, service: undefined },
    ]);
  };

  const deleteOption = (deleteIndex) => {
    setOptionData(
      optionData.filter((item, index) => {
        return index !== deleteIndex;
      })
    );
  };

  const optionChange = (e, key, index) => {
    const { value } = e.target;
    setOptionData(
      optionData.map((item, innIndex) => {
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

  return (
    <>
      <Modal
        centered
        closable={isCloseIcon}
        width="auto"
        title={showTitle()}
        footer={showFooter()}
        open={isOpen}
        closeIcon={<CloseCircleFilled style={{ fontSize: "28px" }} />}
        onCancel={cancelAction}
        maskClosable={false}
      >
        <div className="p-[20px_16px_24px_16px]">
          {type === "account" &&
            optionData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row flex-wrap items-center justify-start mb-[12px]"
                >
                  <div className="w-[250px] flex flex-col items-start justify-center">
                    {index === 0 && (
                      <span className="text-[16px] mb-[5px]">
                        服務品項名稱:
                      </span>
                    )}
                    <Input
                      className="text-[16px] font-bold py-[9px]"
                      placeholder="請輸入品項名稱"
                      allowClear
                      onChange={(e) => optionChange(e, "service", index)}
                      value={item.service}
                    />
                  </div>

                  <div className="w-[187px] flex flex-col items-start justify-center ml-[20px]">
                    {index === 0 && (
                      <span className="text-[16px] mb-[5px]">金額:</span>
                    )}
                    <Input
                      className="text-[16px] font-bold py-[9px]"
                      placeholder="請輸入金額"
                      allowClear
                      onChange={(e) => optionChange(e, "price", index)}
                      value={item.price}
                    />
                  </div>

                  <div
                    className="flex flex-row items-center  ml-[12px]"
                    onClick={() => deleteOption(index)}
                  >
                    <MinusCircleOutlined
                      style={{ fontSize: "20px", color: "#D2D2D2" }}
                    />
                    <span className="text-[14px] text-[#D2D2D2] ml-1">
                      刪除
                    </span>
                  </div>
                </div>
              );
            })}

          <div className="w-[150px] bg-white rounded-[4px] mt-[24px]">
            <Button
              block
              ghost
              type="primary"
              className={"h-[36px] rounded-[4px]"}
              onClick={addOption}
            >
              <div className="flex flex-row items-center">
                <PlusOutlined style={{ fontSize: "24px" }} />
                <span className="ml-[8px]"> 新增服務項目</span>
              </div>
            </Button>
          </div>
        </div>

        {/* <div className="flex flex-row flex-wrap items-center justify-center px-[16px]">
          <div className="w-[457px] flex flex-col items-start justify-center pt-[20px] pb-[18px]">
            <span className="text-[16px]">客戶聯絡電話:</span>

            <Input
              className="text-[16px] font-bold py-[9px] mt-[5px]"
              placeholder="請輸入電話號碼"
              allowClear
              maxLength="10"
              showCount
              onChange={optionChange}
            />
          </div>
        </div> */}
      </Modal>
    </>
  );
};

export default OptionModal;
