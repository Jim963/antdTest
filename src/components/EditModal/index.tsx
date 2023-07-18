import { ChangeEvent, useState } from "react";
import { Modal, Button, Select, Input } from "antd";

interface Props {
  title?: string;
  okText?: string;
  cancelText?: string;
  isOpen: boolean;
  okAction?: () => void;
  cancelAction?: () => void;
}

interface Answer {
  title?: string;
  storeName?: string;
  storeAddress?: string;
  storePhone?: string;
  linePayKey?: string;
  businessTime?: string;
  storeLeaders?: string[];
  serviceOptions?: {
    name: string;
    charge: number | string;
  }[];
}

interface FormItem {
  title: string;
  type: string;
  width: "half" | "full";
  options?: { label: string; value: string }[];
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
  const [answer, setAnswer] = useState<Answer>({});
  const formGroup: FormItem[] = [
    {
      title: "門市名稱",
      type: "input",
      width: "half",
      keyName: "storeName",
    },
    {
      title: "門市地址",
      type: "input",
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

  const inputChange = (e: ChangeEvent<HTMLInputElement>, keyName: any) => {
    const { value } = e?.target;
    setAnswer({ ...answer, [keyName]: value });
  };

  const selectChange = (
    value: ChangeEvent<HTMLSelectElement>,
    keyName: string
  ) => {
    setAnswer({ ...answer, [keyName]: value });
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
                <TextArea className=""></TextArea>
              )}
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default EditModal;
