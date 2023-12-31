import { ChangeEvent, useState } from "react";
import { Modal, Button, Input, Select } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

interface Props {
  title: string;
  okText?: string;
  cancelText?: string;
  isCloseIcon?: boolean;
  isOpen: boolean;
  remind: boolean;
  okAction?: () => void;
  cancelAction?: () => void;
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

const FormModal = ({
  title,
  remind,
  okText,
  cancelText,
  isCloseIcon = true,
  isOpen,
  okAction,
  cancelAction,
}: Props) => {
  const [answer, setAnswer] = useState({});

  const formGroup: FormItem[] = [
    {
      title: "服務項目",
      type: "select",
      width: "half",
      options: [
        { value: "1", label: "項目一" },
        { value: "2", label: "項目二" },
      ],
      keyName: "serviceOption",
    },
    {
      title: "數量",
      type: "select",
      width: "half",
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
      ],
      keyName: "amount",
    },
    {
      title: "客戶聯絡電話",
      type: "input",
      placeholder: "請輸入電話",
      maxLength: 10,
      width: "full",
      keyName: "customerPhone",
    },
    {
      title: "店長密碼",
      type: "input",
      placeholder: "請輸入密碼",
      width: "half",
      keyName: "password",
    },
    {
      title: "確認店長密碼",
      type: "input",
      placeholder: "請輸入密碼",
      width: "half",
      keyName: "confirmPassword",
    },
  ];

  const showTitle = () => {
    return (
      <div className="text-[20px] xl:text-[22px] pt-[12px] px-[20px]">
        {title}
      </div>
    );
  };
  const showFooter = () => {
    return (
      <div className="flex flex-col items-center justify-center pt-[6px] pb-[20px]">
        <div className="flex flex-row items-center justify-center">
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
        </div>

        {remind && (
          <div className="text-[14px] pt-[12px]">
            點選<span className="font-bold px-1">確認建立訂單</span>
            後，系統將發送付款通知給該客戶
          </div>
        )}
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
    <>
      <Modal
        className="min-w-[560px] xl:min-w-[600px]"
        centered
        closable={isCloseIcon}
        title={showTitle()}
        footer={showFooter()}
        open={isOpen}
        closeIcon={<CloseCircleFilled className={"text-[28px]"} />}
        onCancel={cancelAction}
        maskClosable={false}
      >
        <div className="flex flex-row flex-wrap items-start justify-between p-[20px_16px_18px_16px]">
          {formGroup.map((item) => {
            return (
              <div
                key={item.title}
                className={`flex flex-col items-start justify-center mb-[24px] ${
                  item.width === "full" ? "w-full" : "w-[230px] xl:w-[250px]"
                }`}
              >
                <span className="text-[14px] xl:text-[16px]">
                  {item.title}：
                </span>

                {item.type === "select" ? (
                  <Select
                    className="w-full text-[14px] xl:text-[16px] font-bold mt-[5px] border border-solid border-[#d9d9d9] rounded-[8px] py-[5px]"
                    placeholder={<span>請使用下拉選項</span>}
                    bordered={false}
                    options={item.options}
                    onChange={(value) => selectChange(value, item.keyName)}
                  />
                ) : (
                  <Input
                    className="text-[14px] xl:text-[16px] font-bold py-[9px] mt-[5px]"
                    placeholder={item.placeholder}
                    allowClear
                    maxLength={item.maxLength}
                    showCount={item.maxLength ? true : false}
                    onChange={(e) => inputChange(e, item.keyName)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default FormModal;
