import { useState, useEffect } from "react";
import ModalOne from "./components/ModalOne";
import { notification, Alert } from "antd";

function App() {
  const [api, contextHolder] = notification.useNotification();

  console.log(api, "看看");

  const alertType = ["success", "info", "warning", "error"];
  const [isAlert, setIsAlert] = useState(false);

  const [openModal, setModal1Open] = useState(false);
  useEffect(() => {
    api.success({
      type: "success",
      message: "Notification Title",
      description: "description",
      className: "bg-blue-400",
    });
  }, []);

  return (
    <>
      {contextHolder}

      {isAlert && <Alert message="Warning" type="warning" showIcon closable />}

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
