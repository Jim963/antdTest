import { useState } from "react";
import { Modal, Button, Input, Select } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

const FormModal = ({
  title,
  remind = true,
  okText = "確認，建立服務單",
  cancelText = "上一步",
  isCloseIcon = true,
  isOpen,
  okAction,
  cancelAction,
}) => {
  const [answer, setAnswer] = useState({});

  const formGroup = [
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
      maxLength: "10",
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
    return <div className="text-[22px] pt-[12px] px-[20px]">{title}</div>;
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

        {remind && (
          <div className="text-[14px] pt-[12px]">
            點選<span className="font-bold px-1">確認建立訂單</span>
            後，系統將發送付款通知給該客戶
          </div>
        )}
      </div>
    );
  };

  const inputChange = (e, keyName) => {
    const { value } = e?.target;
    setAnswer({ ...answer, [keyName]: value });
  };

  const selectChange = (value, keyName) => {
    setAnswer({ ...answer, [keyName]: value });
  };

  return (
    <>
      <Modal
        centered
        closable={isCloseIcon}
        width="600px"
        title={showTitle()}
        footer={showFooter()}
        open={isOpen}
        closeIcon={<CloseCircleFilled style={{ fontSize: "28px" }} />}
        onCancel={cancelAction}
        maskClosable={false}
      >
        <div className="flex flex-row flex-wrap items-start justify-between px-[16px] pb-[18px]">
          {formGroup.map((item, index) => {
            return (
              <div
                key={item.title}
                className={`flex flex-col items-start justify-center mb-[24px] ${
                  item.width === "full" ? "w-full" : "w-[250px]"
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
                ) : (
                  <Input
                    className="text-[16px] font-bold py-[9px] mt-[5px]"
                    placeholder={item.placeholder}
                    allowClear
                    maxLength={item.maxLength}
                    showCount
                    onChange={(e) => inputChange(e, keyName)}
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
