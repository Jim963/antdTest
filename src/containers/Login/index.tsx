import { useState } from "react";
import { Button, Input } from "antd";
import LogoImg from "../../assets/images/logo.png";

const Login = () => {
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");
  const login = () => {
    console.log(account, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img className="w-[200px] h-[63px] mb-[40px]" src={LogoImg} />

      <div className="text-[22px] font-bold mb-[20px]">登入</div>

      <div className="flex flex-col items-start justify-center mb-[24px]">
        <div>帳號：</div>
        <div className="w-[320px]">
          <Input
            className="text-[14px] xl:text-[16px] font-bold py-[9px] mt-[5px]"
            placeholder={"請輸入帳號"}
            allowClear
            status={errMessage === "account" ? "error" : ""}
            value={account}
            onChange={(e) => {
              const { value } = e?.target;
              return setAccount(value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="w-[320px]">
          <div>密碼：</div>
          <Input
            className="text-[14px] xl:text-[16px] font-bold py-[9px] mt-[5px]"
            placeholder={"請輸入密碼"}
            allowClear
            status={errMessage === "password" ? "error" : ""}
            value={password}
            onChange={(e) => {
              const { value } = e?.target;
              return setPassword(value);
            }}
          />
        </div>
      </div>

      <div className="w-[172px] xl:w-[200px] mt-[40px]">
        <Button
          block
          type="primary"
          className={"h-[44px] xl:h-[48px]"}
          onClick={login}
        >
          <span className="allCenter text-[14px] xl:text-[16px]">登入</span>
        </Button>
      </div>

      <div className="text-[14px] xl:text-[16px] text-[#999] mt-[24px] cursor-pointer">
        忘記密碼？
      </div>
    </div>
  );
};

export default Login;
