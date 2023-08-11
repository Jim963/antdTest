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
import EditModal from "../../components/EditModal";
//Modal
import DashboardCard from "../../components/DashboardCard";
import AlertDisplay from "../../components/AlertDisplay";
import { notification } from "antd";
import BarChart from "../../components/BarChart";

const Demo = () => {
  const dispatch = useDispatch<AppDispatch>();

  //notification
  const [api, alertContext] = notification.useNotification();
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
  const [openEdit, setOpenEdit] = useState(false);
  //modal

  const test = () => {
    const data = [
      true,
      true,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      true,
      true,
      false,
    ];
    let answer: any = new Array(data.length).fill("none");
    const newData = data.map((item, index) => ({ value: item, site: index }));
    const trueArr = newData.filter((item) => item.value === true);
    const falseArr = newData.filter((item) => item.value === false);

    let tmp = true;
    let count = 0;

    for (let i = 0; i < data.length; i++) {
      const gap = count * 3;
      if (tmp === true) {
        console.log(i, "i", i - gap, "i-GAP", "true option");
        answer[i] = trueArr[i - gap];
      } else {
        console.log(i, "i", i - gap, "i-GAP", "false option");
        answer[i] = falseArr[i - gap + 3];
      }

      if ((i + 1) % 3 === 0) {
        tmp = !tmp;
        count += 1;
      }
    }

    console.log(answer, "答案");
  };

  test();

  return (
    <>
      {/* notification */}
      {alertContext}
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
        okText="客戶 現金付款"
        cancelText="測試"
        isOpen={openDetail}
        unpaid={true}
        extraCharge={true}
        payExtraCharge={false}
        oriCharge={100000}
        linePay={100}
        cash={80}
        remind={true}
        messageType="payment"
        cancelAction={() => steOpenDetail(false)}
        okAction={() => steOpenDetail(false)}
        cancelSheet={false}
      ></SheetDetailModal>

      <FormModal
        title={"選擇服務項目"}
        isOpen={openForm}
        okText="確認，建立服務單"
        cancelText="上一步"
        remind={true}
        cancelAction={() => setOpenForm(false)}
        okAction={() => setOpenForm(false)}
      ></FormModal>

      <StatusModal
        title={"尚未收到 LINE Pay款項"}
        subtitle={"您可以再次確認客戶 LINE Pay付款資訊，或使用現金收款"}
        payment={"120"}
        status={"warning"}
        isOpen={openStatus}
        okTextGhost={"使用現金收款"}
        okText={"在確認一次"}
        cancelText={"取消"}
        cancelAction={() => setOpenStatus(false)}
        // okAction={() => setOpenStatus(false)}
        // okGhostAction={() => setOpenStatus(false)}
      ></StatusModal>

      <ServiceModal
        title="選擇服務項目"
        isOpen={openService}
        cancelAction={() => setOpenService(false)}
        okAction={() => setOpenService(false)}
        remind={true}
      ></ServiceModal>

      <TableModal
        title="營業報表"
        isOpen={openTable}
        cancelAction={() => setOpenTable(false)}
      ></TableModal>

      <OptionModal
        type="service"
        title={"綁定店長"}
        isOpen={openOption}
        okText="完成建立門市"
        cancelText="上一步"
        cancelAction={() => setOpenOption(false)}
        okAction={() => setOpenOption(false)}
      ></OptionModal>

      <InfoModal
        title="門市資訊"
        isOpen={openInfo}
        cancelAction={() => setOpenInfo(false)}
        cancelText="編輯"
      ></InfoModal>

      <EditModal
        title="編輯門市資訊"
        isOpen={openEdit}
        okAction={() => setOpenEdit(false)}
        cancelAction={() => setOpenEdit(false)}
        okText="完成"
        cancelText="取消"
      ></EditModal>

      <div className="flex flex-row flex-wrap">
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

        <button className="mx-2" onClick={() => setOpenEdit(true)}>
          EditModal
        </button>
      </div>

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

      <div className="w-full">
        <BarChart title="本月營收圖表"></BarChart>
      </div>
    </>
  );
};

export default Demo;
