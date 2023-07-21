import { ChangeEvent, useState } from "react";
import { Modal, Button, Select, Input } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

interface Props {
  title?: string;
  okText?: string;
  cancelText?: string;
  isOpen: boolean;
  okAction?: () => void;
  cancelAction?: () => void;
}

type Answer = {
  [keyName: string]: any[] | string | undefined;
} & {
  title?: string;
  storeName?: string;
  storeAddress?: string;
  storePhone?: string;
  linePayKey?: string;
  businessTime?: string;
  storeManagers: any[];
  serviceOptions: {
    service?: string;
    price?: number | string;
  }[];
};

interface FormItem {
  title: string;
  type: string;
  width: "half" | "full";
  options?: { label?: string; value?: string }[];
  keyName: string;
  placeholder?: string;
  maxLength?: number;
}

const EditModal = ({
  title,
  okText,
  cancelText,
  isOpen,
  okAction,
  cancelAction,
}: Props) => {
  const { TextArea } = Input;
  const [answer, setAnswer] = useState<Answer>({
    serviceOptions: [{ service: undefined, price: undefined }],
    storeManagers: ["98765", "3456789", "jimTest"],
  });
  const formGroup: FormItem[] = [
    {
      title: "門市名稱",
      type: "input",
      placeholder: "請輸入門市名稱",
      width: "half",
      keyName: "storeName",
    },
    {
      title: "門市地址",
      type: "input",
      placeholder: "請輸入門市地址",
      width: "half",
      keyName: "storeAddress",
    },
    {
      title: "門市聯絡電話",
      type: "input",
      placeholder: "請輸入電話",
      maxLength: 10,
      width: "half",
      keyName: "storePhone",
    },
    {
      title: "門市 LINE Pay Key",
      type: "input",
      placeholder: "請輸入 Line Pay Key",
      width: "half",
      keyName: "linePayKey",
    },
    {
      title: "門市營業時間",
      type: "textArea",
      placeholder: "請輸入營業時間",
      width: "full",
      keyName: "businessTime",
    },
  ];

  const showTitle = () => {
    return <div className="text-[22px] pt-[12px] px-[16px]">{title}</div>;
  };
  const showFooter = () => {
    return (
      <div className="flex flex-col items-center justify-center pt-[6px] pb-[20px]">
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

  const inputChange = (e: ChangeEvent<HTMLInputElement>, keyName: string) => {
    const { value } = e?.target;
    setAnswer({ ...answer, [keyName]: value });
  };

  const selectChange = (value: string, keyName: string) => {
    setAnswer({ ...answer, [keyName]: value });
  };

  const addOption = (keyName: string) => {
    const target = answer[keyName];
    if (target && Array.isArray(target)) {
      setAnswer({
        ...answer,
        [keyName]: [...target, undefined],
      });
    }
  };

  const optionChange = (
    e: ChangeEvent<HTMLInputElement>,
    keyName: string,
    changeIndex: number
  ) => {
    const { value } = e?.target;
    const target = answer[keyName];
    if (target && Array.isArray(target)) {
      setAnswer({
        ...answer,
        [keyName]: target.map((option, index) => {
          if (index === changeIndex) {
            return value;
          } else {
            return option;
          }
        }),
      });
    }
  };

  const deleteOption = (deleteIndex: number, keyName: string) => {
    const target = answer[keyName];
    if (Array.isArray(target) && target.length > 1) {
      setAnswer({
        ...answer,
        [keyName]: target.filter((_, index) => index !== deleteIndex),
      });
    }
  };

  return (
    <Modal
      centered
      closable={false}
      width="880px"
      title={showTitle()}
      footer={showFooter()}
      open={isOpen}
      onCancel={cancelAction}
      maskClosable={false}
    >
      <div className="flex flex-row flex-wrap items-start justify-between p-[20px_16px_18px_16px]">
        {formGroup.map((item) => {
          return (
            <div
              key={item.title}
              className={`flex flex-col items-start justify-center mb-[24px] ${
                item.width === "full" ? "w-full" : "w-[385px]"
              }`}
            >
              <span className="text-[16px]">{item.title}：</span>

              {item.type === "select" ? (
                <Select
                  className="w-full text-[16px] font-bold mt-[5px] border border-solid border-[#d9d9d9] rounded-[6px] py-[5px]"
                  placeholder={<span>請使用下拉選項</span>}
                  bordered={false}
                  options={item.options}
                  onChange={(value) => selectChange(value, item.keyName)}
                />
              ) : item.type === "input" ? (
                <Input
                  className="text-[16px] font-bold py-[9px] mt-[5px]"
                  placeholder={item.placeholder}
                  allowClear
                  maxLength={item.maxLength}
                  showCount={item.maxLength ? true : false}
                  onChange={(e) => inputChange(e, item.keyName)}
                />
              ) : (
                <TextArea
                  className="text-[16px] font-bold py-[9px] mt-[5px]"
                  rows={3}
                ></TextArea>
              )}
            </div>
          );
        })}

        <div className="flex flex-col items-start justify-center">
          <div className="text-[16px] mb-[5px]">店長姓名與聯絡電話：</div>
          <div className="flex flex-col items-start justify-center">
            {answer.storeManagers?.map((managerItem, managerIndex) => {
              return (
                <div
                  key={managerIndex + "input"}
                  className="flex flex-row items-center justify-center mb-[12px]"
                >
                  <Input
                    className="w-[385px] text-[16px] font-bold py-[9px]"
                    placeholder="請輸入帳號/手機"
                    onChange={(e) =>
                      optionChange(e, "storeManagers", managerIndex)
                    }
                    value={managerItem}
                  />

                  <div
                    className={`flex flex-row items-center  ml-[12px] ${
                      answer.storeManagers.length > 1
                        ? "text-[#EB3125]"
                        : "text-[#D2D2D2]"
                    }`}
                    onClick={() => deleteOption(managerIndex, "storeManagers")}
                  >
                    <MinusCircleOutlined
                      style={{
                        fontSize: "20px",
                        color:
                          answer.storeManagers.length > 1
                            ? "#EB3125"
                            : "#D2D2D2",
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
                onClick={() => addOption("storeManagers")}
              >
                <div className="flex flex-row items-center">
                  <PlusOutlined style={{ fontSize: "24px" }} />
                  <span className="ml-[8px]">Test</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
