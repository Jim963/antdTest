import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAlert, deleteAlert } from "./store/slices/alert";
import ModalOne from "./components/ModalOne";
import { notification, Alert } from "antd";

function App() {
  //store
  const dispatch = useDispatch();
  const alertState = useSelector((state) => state.alerts);
  console.log(alertState, "瞧瞧");

  const handleAlert = async (type, text) => {
    const id = type + new Date();
    dispatch(
      addAlert({
        id,
        type,
        text,
      })
    );
    await wait(5000);
    dispatch(deleteAlert({ id }));
  };
  //store

  const wait = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };

  //notification
  const [api, contextHolder] = notification.useNotification();
  console.log(api, "看看");
  //notification

  const [isAlert, setIsAlert] = useState(false);

  //modal
  const [openModal, setModal1Open] = useState(false);
  //modal

  return (
    <>
      {contextHolder}

      <div className="flex flex-col items-center justify-center">
        {alertState.alertList.map((item) => (
          <div className="w-[500px] py-2">
            <Alert
              key={item.id}
              message={item.text}
              type={item.type}
              showIcon
              closable
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center">
        <button onClick={() => handleAlert("success", "success content")}>
          success
        </button>
        <button onClick={() => handleAlert("info", "info content")}>
          info
        </button>
        <button onClick={() => handleAlert("warning", "warning content")}>
          warning
        </button>
        <button>error</button>
      </div>

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
