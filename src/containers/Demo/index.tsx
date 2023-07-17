import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { handleAlert } from "../../store/slices/alert";
//Modal
import SheetDetailModal from "../../components/SheetDetailModal";
import FormModal from "../../components/FormModal";
import StatusModal from "../../components/StatusModal";
import ServiceModal from "../../components/ServiceModal";
import TableModal from "../../components/TableModal";
import OptionModal from "../../components/OptionModal";
import InfoModal from "../../components/InfoModal";
//Modal
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
  const [openDetail, steOpenDetail] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
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
        isOpen={openDetail}
        cancelAction={() => steOpenDetail(false)}
        okAction={() => steOpenDetail(false)}
      ></SheetDetailModal>

      <FormModal
        title={"選擇服務項目"}
        isOpen={openForm}
        cancelAction={() => setOpenForm(false)}
        okAction={() => setOpenForm(false)}
      ></FormModal>

      <StatusModal
        title={"尚未收到 LINE Pay款項"}
        // subtitle={"您可以再次確認客戶 LINE Pay付款資訊，或使用現金收款"}
        status={"loading"}
        isOpen={openStatus}
        cancelAction={() => setOpenStatus(false)}
        // okAction={() => setOpenStatus(false)}
        // okGhostAction={() => setOpenStatus(false)}
      ></StatusModal>

      <ServiceModal
        title="選擇服務項目"
        isOpen={openService}
        cancelAction={() => setOpenService(false)}
        okAction={() => setOpenService(false)}
      ></ServiceModal>

      <TableModal
        title="營業報表"
        isOpen={openTable}
        okAction={() => setOpenTable(false)}
        cancelAction={() => setOpenTable(false)}
      ></TableModal>

      <OptionModal
        title={"綁定店長"}
        isOpen={openOption}
        cancelAction={() => setOpenOption(false)}
        okAction={() => setOpenOption(false)}
      ></OptionModal>

      <InfoModal
        title="門市資訊"
        isOpen={openInfo}
        cancelAction={() => setOpenInfo(false)}
        okText="確認"
        cancelText="編輯"
      ></InfoModal>

      <button className="mx-2" onClick={() => steOpenDetail(true)}>
        DetailModal
      </button>
      <button className="mx-2" onClick={() => setOpenForm(true)}>
        FormModal
      </button>
      <button className="mx-2" onClick={() => setOpenStatus(true)}>
        StatusModal
      </button>
      <button className="mx-2" onClick={() => setOpenService(true)}>
        ServiceModal
      </button>
      <button className="mx-2" onClick={() => setOpenTable(true)}>
        TableModal
      </button>

      <button className="mx-2" onClick={() => setOpenOption(true)}>
        OptionModal
      </button>

      <button className="mx-2" onClick={() => setOpenInfo(true)}>
        InfoModal
      </button>

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
