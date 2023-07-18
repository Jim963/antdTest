import { useState } from "react";
import { Modal, Button, Input, Select } from "antd";
import { CloseCircleFilled, RightOutlined } from "@ant-design/icons";

const InfoModal = ({
  title = "門市資訊",
  okText,
  cancelText = "編輯",
  isCloseIcon = true,
  isOpen,
  okAction,
  cancelAction,
}) => {
  const [isLinePayKey, setIsLinePayKey] = useState(false);
  const infoGroup = [
    {
      title: "門市名稱",
      width: "short",
      keyName: "storeName",
      content: [{ name: "台中南屯寶輝門市" }],
    },
    {
      title: "門市地址",
      width: "short",
      keyName: "storeAddress",
      content: [{ name: "台中市南屯區向上路二段182巷192弄15樓之1" }],
    },
    {
      title: "門市聯絡電話",
      width: "short",
      keyName: "storePhone",
      content: [{ name: "04-29582930" }],
    },
    {
      title: "門市 LINE Pay Key",
      width: "short",
      keyName: "storeLinePayKey",
      content: [{ name: "48294-kdn92-fj8492-fiel1-fjeie2", linkText: "隱藏" }],
    },
    {
      title: "門市營業時間",
      width: "short",
      keyName: "businessTime",
      content: [
        { name: "平日- 10:00 ~ 24:00" },
        { name: "假日- 8:00 ~ 24:00" },
      ],
    },
    {
      title: "店長姓名與聯絡電話",
      width: "short",
      keyName: "leaderPhone",
      content: [{ name: "陳大明 (0928373928)" }],
    },
    {
      title: "服務品項",
      width: "long",
      keyName: "serviceOption",
      content: [
        { name: "洗衣+烘乾-60分鐘(15kg)", charge: "60" },
        { name: "只有洗衣-30分鐘(22kg)", charge: "60" },
        { name: "只有烘衣-60分鐘(600kg)", charge: "3000" },
      ],
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

  return (
    <>
      <Modal
        centered
        closable={isCloseIcon}
        width="880px"
        title={showTitle()}
        footer={showFooter()}
        open={isOpen}
        closeIcon={<CloseCircleFilled style={{ fontSize: "28px" }} />}
        onCancel={cancelAction}
        maskClosable={false}
      >
        <div className="box-border w-full flex flex-row flex-wrap items-start justify-between p-[14px_16px_18px_16px]">
          {infoGroup.map((item, index) => {
            return (
              <div
                key={item.title}
                className={`box-border w-1/2 flex flex-col items-start justify-center mb-[24px] ${
                  index % 2 == 0 ? "pr-[17px]" : "pl-[17px]"
                }`}
              >
                <span className="text-[16px]">{item.title}：</span>
                {item.content.map((contentItem, InnerIndex) => {
                  return (
                    <div className="w-full" key={contentItem.name}>
                      <div
                        className={`w-full flex flex-row items-center text-[18px] font-bold mt-[8px] ${
                          contentItem.charge
                            ? "justify-between"
                            : "justify-start"
                        }`}
                      >
                        {contentItem.linkText && !isLinePayKey ? (
                          <div>＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊</div>
                        ) : (
                          <div>{contentItem.name}</div>
                        )}

                        {/* charge */}
                        {contentItem.charge && (
                          <div>{contentItem.charge} 元</div>
                        )}

                        {/* link */}
                        {contentItem.linkText && (
                          <div
                            className="flex flex-row items-center"
                            onClick={() => setIsLinePayKey(!isLinePayKey)}
                          >
                            <div className="text-[#275682] text-[14px] pl-[10px]">
                              {isLinePayKey ? contentItem.linkText : "顯示"}
                            </div>
                            <RightOutlined style={{ color: "#275682" }} />
                          </div>
                        )}
                      </div>

                      {/* bottom border */}
                      {InnerIndex + 1 < item.content.length &&
                        contentItem.charge && (
                          <div className="w-full mt-[8px] border-0 border-dashed border-[#C4C4C4] border-b"></div>
                        )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default InfoModal;
