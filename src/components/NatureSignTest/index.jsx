import React, { useState, useEffect, useRef } from "react";

const NatureSignTest = ({
  state,
  setStateData,
  isPinError,
  getErrorMsg,
  natureTrigger,
  setNatureTrigger,
}) => {
  const postTarget = useRef(null);
  const [pinCode, setPinCode] = useState("");
  const [natureState, setNatureState] = useState({
    tbs: "TBS", //隨機值,get from api,
    b64Signature: "",
    b64Cert: "",
    returnCode: "",
    tbsEncoding: "NONE",
    hashAlgorithm: "SHA256",
  });
  let timeoutId;
  let STATE_CACHE = {};

  const login = () => {
    console.log(STATE_CACHE, "看一下參數");
  };

  // get random tbs
  //   const AjaxGetToken = async () => {
  //     try {
  //       await axios({
  //         method: "GET",
  //         url: "gettoken",
  //       })
  //         .then(function (response) {
  //           console.log(response, "AjaxGetToken");
  //           return response;
  //         })
  //         .catch(function (err) {
  //           console.log(err, "error");
  //         });
  //     } catch (e) {
  //       console.log(e);
  //       alert("系統發生錯誤！");
  //     }
  //   };

  // 檢查簽章是否完成
  const checkFinish = async () => {
    if (postTarget.current) {
      postTarget.current.close();
      alert("尚未安裝元件");
    }
  };

  //進行自然人簽章
  const makeSignature = () => {
    console.log("makeSignature", natureState);
    console.log("makeSignature", pinCode);
    // const ua = window.navigator.userAgent;
    postTarget.current = window.open(
      "http://localhost:61161/popupForm",
      "簽章中",
      "height=200, width=200, left=100, top=20"
    );
    timeoutId = setTimeout(checkFinish, 3500);
  };

  // 拿取tbs封包
  const getTbsPackage = () => {
    const tbsData = {
      tbs: encodeURIComponent(natureState.tbs),
      tbsEncoding: natureState.tbsEncoding,
      hashAlgorithm: natureState.hashAlgorithm,
      pin: pinCode,
      func: "MakeSignature",
      signatureType: "PKCS1",
    };
    console.log(tbsData, "封包傳出");
    return JSON.stringify(tbsData);
  };

  //賦值
  const setSignature = (signature, cache) => {
    const ret = JSON.parse(signature);
    STATE_CACHE = {
      ...cache,
      b64Signature: ret.signature,
      b64Cert: ret.certb64,
      returnCode: ret.ret_code,
    };
    console.log(ret, "setSignature");
    // setNatureState((pre) => {
    //   return {
    //     ...pre,
    //     b64Signature: ret.signature,
    //     b64Cert: ret.certb64,
    //     returnCode: ret.ret_code,
    //   };
    // });
    if (ret.ret_code !== 0) {
      console.log("nope");
      //   alert(MajorErrorReason(ret.ret_code));
      //   if (ret.last_error) alert(MinorErrorReason(ret.last_error));
    } else {
      postTarget.current = null;
      login();
    }
    // else prepareFormData();
  };

  // 收到訊息處理
  const receiveMessage = (event) => {
    if (console) console.debug(event);
    //安全起見，這邊應填入網站位址檢查
    if (event.origin !== "http://localhost:61161") return;
    try {
      console.log("receiveMessage", pinCode, "pinCode");
      const ret = JSON.parse(event.data);
      if (ret.func) {
        if (ret.func === "getTbs") {
          clearTimeout(timeoutId);
          const json = getTbsPackage();
          STATE_CACHE = JSON.parse(json);
          console.log(STATE_CACHE, "看一下cache");
          postTarget.current.postMessage(json, "*");
        } else if (ret.func === "sign") {
          setSignature(event.data, STATE_CACHE);
        }
      } else {
        if (console) console.error("no func");
      }
    } catch (e) {
      //errorhandle
      if (console) console.error(e);
    }
  };

  //加密
  const encrypt = () => {
    if (state.staffID === "") {
      alert("請輸入帳號");
      return;
    }
    if (pinCode === "") {
      alert("請輸入卡片PIN碼");
      return;
    }
    makeSignature();
  };

  React.useEffect(() => {
    // const randomToken = AjaxGetToken();
    // console.log(randomToken.data, "randomToken");
    // setNatureState((pre) => ({ ...pre, tbs: randomToken.data }));
    window.addEventListener("message", receiveMessage, false);

    return () => {
      console.log("remove!");
      window.removeEventListener("message", receiveMessage, false);
    };
  }, [pinCode]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNatureState((pre) => {
      return { ...pre, [name]: value };
    });
  };

  useEffect(() => {
    if (!!natureTrigger) {
      encrypt();
      setNatureTrigger(false);
    }
  }, [natureTrigger]);

  return (
    <div>
      <button onClick={() => makeSignature()}>Test</button>
      <input
        id="pinCode"
        name="pinCode"
        onChange={(e) => {
          const { value } = e.target;
          setPinCode(value);
        }}
        value={pinCode ?? ""}
      />
      <input
        name="tbs"
        id="tbs"
        onChange={(e) => handleChange(e)}
        value={natureState.tbs ?? ""}
      />

      <input
        name="b64Signature"
        id="b64Signature"
        onChange={(e) => handleChange(e)}
        value={natureState.b64Signature ?? ""}
      />
      <input
        name="b64Cert"
        id="b64Cert"
        onChange={(e) => handleChange(e)}
        value={natureState.b64Cert ?? ""}
      />
      <input
        name="returnCode"
        id="returnCode"
        onChange={(e) => handleChange(e)}
        value={natureState.returnCode ?? ""}
      />
      <input name="tbsEncoding" id="tbsEncoding" defaultValue="NONE" />
      <input name="hashAlgorithm" id="hashAlgorithm" defaultValue="SHA256" />
    </div>
  );
};

export default NatureSignTest;
