import { ChangeEvent, useState } from "react";
import { Modal, Button, Input } from "antd";
import {
  CloseCircleFilled,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

interface Props {
  type: string;
  title: string;
  okText?: string;
  cancelText?: string;
  isCloseIcon?: boolean;
  isOpen: boolean;
  okAction?: () => void;
  cancelAction?: () => void;
}

const OptionModal = ({
  type,
  title,
  okText,
  cancelText,
  isCloseIcon = true,
  isOpen,
  okAction,
  cancelAction,
}: Props) => {
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

  const deleteOption = (deleteIndex: number) => {
    if (optionData.length > 1) {
      setOptionData(
        optionData.filter((_item, index) => {
          return index !== deleteIndex;
        })
      );
    }
  };

  const optionChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: string,
    index: number
  ) => {
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
        width="602px"
        title={showTitle()}
        footer={showFooter()}
        open={isOpen}
        closeIcon={<CloseCircleFilled style={{ fontSize: "28px" }} />}
        onCancel={cancelAction}
        maskClosable={false}
      >
        <div className="p-[20px_16px_24px_16px]">
          {optionData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row flex-wrap items-center justify-start mb-[12px]"
              >
                {index === 0 && (
                  <>
                    {type === "service" ? (
                      <>
                        <div className="w-[250px] text-[16px] mb-[5px]">
                          服務品項名稱:
                        </div>
                        <div className="w-[187px] text-[16px] mb-[5px] ml-[20px]">
                          金額:
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-[457px] text-[16px] mb-[5px]">
                          店長帳號/手機號碼：
                        </div>
                      </>
                    )}
                  </>
                )}

                {type === "service" ? (
                  <>
                    <div className="w-[250px] flex flex-col items-start justify-center">
                      <Input
                        className="text-[16px] font-bold py-[9px]"
                        placeholder="請輸入品項名稱"
                        allowClear
                        onChange={(e) => optionChange(e, "service", index)}
                        value={item.service}
                      />
                    </div>

                    <div className="w-[187px] flex flex-col items-start justify-center ml-[20px]">
                      <Input
                        className="text-[16px] font-bold py-[9px]"
                        placeholder="請輸入金額"
                        allowClear
                        onChange={(e) => optionChange(e, "price", index)}
                        value={item.price}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[457px] flex flex-col items-start justify-center">
                      <Input
                        className="text-[16px] font-bold py-[9px]"
                        placeholder="請輸入帳號/手機"
                        allowClear
                        onChange={(e) => optionChange(e, "account", index)}
                        value={item.account}
                      />
                    </div>
                  </>
                )}

                <div
                  className={`flex flex-row items-center  ml-[12px] ${
                    optionData.length > 1 ? "text-[#EB3125]" : "text-[#D2D2D2]"
                  }`}
                  onClick={() => deleteOption(index)}
                >
                  <MinusCircleOutlined
                    style={{
                      fontSize: "20px",
                      color: optionData.length > 1 ? "#EB3125" : "#D2D2D2",
                    }}
                  />
                  <span className="text-[14px] ml-1">刪除</span>
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
                <span className="ml-[8px]">
                  {type === "service" ? "新增服務品項" : "加入其他店長"}
                </span>
              </div>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OptionModal;
