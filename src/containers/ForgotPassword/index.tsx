import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import LogoImg from "../../assets/images/logo.png";

const ForgotPassword = () => {
  const go = useNavigate();
  const [cellphone, setCellphone] = useState<string>("");
  const [verifyCode, setVerifyCode] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");
  const login = () => {
    console.log(cellphone, verifyCode);
  };

  const gotVerifyCode = () => {
    console.log("驗證碼");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img className="w-[200px] h-[63px] mb-[40px]" src={LogoImg} />

      <div className="text-[22px] font-bold mb-[20px]">忘記密碼</div>

      <div className="flex flex-col items-start justify-center mb-[24px]">
        <div>手機號碼：</div>
        <div className="flex flex-row items-center justify-center">
          <div className="w-[198px]">
            <Input
              className="text-[14px] xl:text-[16px] font-bold py-[9px] mt-[5px]"
              placeholder={"請輸入手機號碼"}
              allowClear
              status={errMessage === "cellphone" ? "error" : ""}
              value={cellphone}
              onChange={(e) => {
                const { value } = e?.target;
                return setCellphone(value);
              }}
            />
          </div>

          <div className="w-[110px] ml-[12px]">
            <Button
              block
              type="primary"
              className={"h-[32px]"}
              onClick={gotVerifyCode}
            >
              <span className="allCenter text-[14px] xl:text-[16px]">
                發送驗證碼
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="w-[320px]">
          <div>驗證碼：</div>
          <Input
            className="text-[14px] xl:text-[16px] font-bold py-[9px] mt-[5px]"
            placeholder={"請輸入驗證碼"}
            allowClear
            status={errMessage === "verifyCode" ? "error" : ""}
            value={verifyCode}
            onChange={(e) => {
              const { value } = e?.target;
              return setVerifyCode(value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="w-[172px] xl:w-[200px] mt-[40px] mr-[20px]">
          <Button
            block
            type="default"
            className={"h-[44px] xl:h-[48px]"}
            onClick={() => go("/login")}
          >
            <span className="allCenter text-[14px] xl:text-[16px]">返回</span>
          </Button>
        </div>

        <div className="w-[172px] xl:w-[200px] mt-[40px]">
          <Button
            block
            type="primary"
            className={"h-[44px] xl:h-[48px]"}
            onClick={login}
            disabled={verifyCode.length < 4}
          >
            <span className="allCenter text-[14px] xl:text-[16px]">確認</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
