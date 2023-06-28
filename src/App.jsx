import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAlert, deleteAlert, handleAlert } from "./store/slices/alert";
import ModalOne from "./components/ModalOne";
import { notification, Alert } from "antd";

import { wait } from "./utils";

function App() {
  //store
  const dispatch = useDispatch();
  const alertList = useSelector((state) => state.alerts.alertList);

  // const handleAlert = async (type, text) => {
  //   const id = type + text + alertList.length;
  //   dispatch(addAlert({ id, type, text }));
  //   await wait(5000);
  //   dispatch(deleteAlert({ id }));
  // };
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
        <button>error</button>
      </div>
      {/* alert */}

      <h1 className="text-3xl font-bold underline"></h1>

      <ModalOne
        title={"test"}
        isOpen={openModal}
        cancelAction={() => setModal1Open(false)}
        okAction={() => setModal1Open(false)}
      ></ModalOne>
      <button onClick={() => setModal1Open(true)}>Test</button>
    </>
  );
}

export default App;
