import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAlert } from "./store/slices/alert";
import ModalOne from "./components/ModalOne";
import ModalTwo from "./components/ModalTwo";

import { notification, Alert } from "antd";

import CardOne from "./components/CardOne";

function App() {
  //store
  const dispatch = useDispatch();
  const alertList = useSelector((state) => state.alerts.alertList);
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

      {/* alert */}
      <div className="top-8 horizonCenter flex flex-col items-center justify-center">
        {alertList.map((item) => (
          <div key={item.id} className="w-[500px] py-2">
            <Alert message={item.text} type={item.type} showIcon closable />
          </div>
        ))}
      </div>

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

      {/* <ModalTwo
        title={"選擇服務項目"}
        isOpen={openModal}
        cancelAction={() => setModal1Open(false)}
        okAction={() => setModal1Open(false)}
      ></ModalTwo> */}

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
        unit="人"
      ></CardOne>
      {/* Card */}
    </>
  );
}

export default App;
