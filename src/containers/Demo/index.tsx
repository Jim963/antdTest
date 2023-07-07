import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { handleAlert } from "../../store/slices/alert";
import ModalOne from "../../components/ModalOne";
import ModalTwo from "../../components/ModalTwo";
import CardOne from "../../components/CardOne";
import AlertDisplay from "../../components/AlertDisplay";
import { notification } from "antd";

const Demo = () => {
  //store
  const dispatch = useDispatch<AppDispatch>();
  //store

  //notification
  const [api, contextHolder] = notification.useNotification();
  console.log(api, "看看");
  //notification

  //modal
  const [openModal, setModal1Open] = useState(false);
  //modal

  return (
    <>
      {/* notification */}
      {contextHolder}
      {/* notification */}

      <AlertDisplay></AlertDisplay>

      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() => dispatch(handleAlert("success", "success content"))}
        >
          success
        </button>
        <button onClick={() => dispatch(handleAlert("info", "info content"))}>
          info
        </button>
        <button
          onClick={() => dispatch(handleAlert("warning", "warning content"))}
        >
          warning
        </button>
        <button onClick={() => dispatch(handleAlert("error", "error content"))}>
          error
        </button>
      </div>
      {/* alert */}

      <h1 className="text-3xl font-bold underline"></h1>

      <ModalOne
        title={"測試標題"}
        isOpen={openModal}
        cancelAction={() => setModal1Open(false)}
        okAction={() => setModal1Open(false)}
      ></ModalOne>

      <ModalTwo
        title={"選擇服務項目"}
        isOpen={openModal}
        cancelAction={() => setModal1Open(false)}
        okAction={() => setModal1Open(false)}
      ></ModalTwo>

      <button onClick={() => setModal1Open(true)}>Test</button>

      <div className="w-full flex flex-row items-stretch justify-between flex-wrap mb-[28px]">
        <CardOne
          total={1200000}
          type="multi"
          title="本月營收"
          linePay={400000}
          cash={800000}
        ></CardOne>
        <CardOne
          total={50000}
          type="multi"
          title="本日營收"
          linePay={12000}
          cash={38000}
        ></CardOne>

        <div className="flex flex-col items-between justify-between">
          <CardOne
            title="本月來客數"
            total={38591}
            type="normal"
            unit="人"
          ></CardOne>
          <CardOne
            title="本日來客數"
            total={241}
            type="normal"
            unit="人"
          ></CardOne>
        </div>

        <div className="flex flex-col items-center justify-between">
          <CardOne
            title="三天內未取件數"
            total={51}
            type="normal"
            unit="件"
          ></CardOne>
          <CardOne
            title="三天以上未取件數"
            total={12}
            type="normal"
            unit="件"
          ></CardOne>
        </div>
      </div>
    </>
  );
};

export default Demo;
