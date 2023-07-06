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
  const [openModal, setModal1Open] = useState(true);
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

      {/* Card */}
      <CardOne
        total={"123"}
        type="multi"
        title="本月營收"
        linePay={"123445"}
        cash={"54321"}
      ></CardOne>
      <CardOne
        total={"456"}
        type="normal"
        title="本月來客數"
        cash={"100"}
        linePay={"200"}
        unit="人"
      ></CardOne>
      {/* Card */}
    </>
  );
};

export default Demo;
