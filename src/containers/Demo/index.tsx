import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { handleAlert } from "../../store/slices/alert";
import SheetDetailModal from "../../components/SheetDetailModal";
import ModalTwo from "../../components/ModalTwo";
import StatusModal from "../../components/StatusModal";
import DashboardCard from "../../components/DashboardCard";
import AlertDisplay from "../../components/AlertDisplay";
import { notification } from "antd";
import BarChart from "../../components/BarChart";

const Demo = () => {
  const dispatch = useDispatch<AppDispatch>();

  //notification
  const [api, contextHolder] = notification.useNotification();
  console.log(api, "useNotification");
  //notification

  //modal
  const [openModal, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
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

      <SheetDetailModal
        title={"服務單資訊"}
        isOpen={openModal}
        cancelAction={() => setOpenModal1(false)}
        okAction={() => setOpenModal1(false)}
      ></SheetDetailModal>

      <ModalTwo
        title={"選擇服務項目"}
        isOpen={openModal2}
        cancelAction={() => setOpenModal2(false)}
        okAction={() => setOpenModal2(false)}
      ></ModalTwo>

      <StatusModal
        title={"尚未收到 LINE Pay款項"}
        subtitle={"您可以再次確認客戶 LINE Pay付款資訊，或使用現金收款"}
        status={"success"}
        isOpen={openStatus}
        cancelAction={() => setOpenStatus(false)}
        okAction={() => setOpenStatus(false)}
        okGhostAction={() => setOpenStatus(false)}
      ></StatusModal>

      <button onClick={() => setOpenModal1(true)}>Test</button>
      <button onClick={() => setOpenModal2(true)}>testTwo</button>
      <button onClick={() => setOpenStatus(true)}>testStatus</button>

      <div className="w-full flex flex-row items-stretch justify-between flex-wrap mb-[28px]">
        <DashboardCard
          total={1200000}
          type="multi"
          title="本月營收"
          linePay={400000}
          cash={800000}
        ></DashboardCard>
        <DashboardCard
          total={50000}
          type="multi"
          title="本日營收"
          linePay={12000}
          cash={38000}
        ></DashboardCard>

        <div className="flex flex-col items-between justify-between">
          <DashboardCard
            title="本月來客數"
            total={38591}
            type="normal"
            unit="人"
          ></DashboardCard>
          <DashboardCard
            title="本日來客數"
            total={241}
            type="normal"
            unit="人"
          ></DashboardCard>
        </div>

        <div className="flex flex-col items-center justify-between">
          <DashboardCard
            title="三天內未取件數"
            total={51}
            type="normal"
            unit="件"
          ></DashboardCard>
          <DashboardCard
            title="三天以上未取件數"
            total={12}
            type="normal"
            unit="件"
          ></DashboardCard>
        </div>
      </div>

      <BarChart title="本月營收圖表"></BarChart>
    </>
  );
};

export default Demo;
