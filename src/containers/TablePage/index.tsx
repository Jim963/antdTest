import { Tabs, Table, Tag, Space, Button, DatePicker } from "antd";
import type { ColumnsType } from "antd/es/table";
import calendarIcon from "../../assets/images/calendar.svg";
import zhTW from "antd/es/date-picker/locale/zh_TW";
import "dayjs/locale/zh-tw";
import { toCurrency } from "../../utils";

interface Tab {
  key: string;
  label: string;
}

interface DataItem {
  key: string;
  storeName: string;
  serviceNum: number | string;
  customer: string;
  serviceProgress?: string | React.ReactNode;
  time: string | React.ReactNode;
  operation?: React.ReactNode;
  expand?: React.ReactNode;
  linePay?: string | number;
  cash?: string | number;
  payStatus: string;
}

interface incomeItem {
  name: string;
  value: string | number;
}

interface orderItem extends incomeItem {}

const TablePage = () => {
  const tabItems: Tab[] = [
    {
      key: "1",
      label: `服務單報表`,
      //   children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `簡訊發送報表`,
      //   children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `LINE 發送報表`,
      //   children: `Content of Tab Pane 3`,
    },
  ];
  const columns: ColumnsType<DataItem> = [
    Table.EXPAND_COLUMN,
    {
      title: "門市名稱",
      key: "storeName",
      dataIndex: "storeName",
      className: "text-[12px] xl:text-[14px]",
      render: (text: any) => {
        let emptyArr = [];
        let restWord = text;
        while (restWord.length > 0) {
          emptyArr.push(restWord.slice(0, 10));
          restWord = restWord.slice(10);
        }

        return (
          <div style={{ wordWrap: "break-word", wordBreak: "break-word" }}>
            {emptyArr.map((item) => (
              <div
                key={item}
                className="flex flex-col items-start justify-center"
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        );
      },
    },
    {
      title: "服務單號",
      key: "serviceNum",
      dataIndex: "serviceNum",
      className: "text-[12px] xl:text-[14px]",
    },
    {
      title: "客戶姓名與聯絡電話",
      key: "customer",
      dataIndex: "customer",
      className: "text-[12px] xl:text-[14px]",
    },
    {
      title: "服務進度",
      key: "serviceProgress",
      dataIndex: "serviceProgress",
      className: "text-[12px] xl:text-[14px]",
      render: (_, record) => (
        <span
          className={
            record.serviceProgress === "已取消"
              ? "text-[#999]"
              : "text-navyBlue"
          }
        >
          {record.serviceProgress}
        </span>
      ),
    },
    {
      title: (
        <div>
          <div>總金額</div>
          <div className="text-[#999] font-normal">(LINE Pay已付/現金已付)</div>
        </div>
      ),
      key: "sum",
      dataIndex: "sum",
      className: "text-[12px] xl:text-[14px]",
      render: (_, record) => (
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className="font-bold">
              ＄{Number(record.linePay) + Number(record.cash)}
            </div>
            <div>
              ({record.linePay} / {record.cash})
            </div>
          </div>

          <div
            className={`px-2 rounded ${
              record.payStatus === "已付款"
                ? "text-navyBlue bg-[#D9E6F2]"
                : record.payStatus === "尚缺款項"
                ? "text-[#F87700] bg-[#FFF2E7]"
                : "text-[#999] bg-[#F8F8F8]"
            }`}
          >
            {record.payStatus}
          </div>
        </div>
      ),
    },
    {
      title: "開單時間",
      key: "time",
      dataIndex: "time",
      className: "text-[12px] xl:text-[14px]",
    },
    {
      title: "操作",
      key: "operation",
      dataIndex: "operation",
      className: "text-[12px] xl:text-[14px]",
    },
  ];
  const data: DataItem[] = [
    {
      key: "1",
      storeName: "一二三四五六123409876",
      serviceNum: "000",
      customer: "客戶一(電話)",
      serviceProgress: "已開單",
      time: (
        <div>
          <div>1993/01/27</div> <div>10:00</div>
        </div>
      ),
      operation: (
        <div className="flex flex-col items-center justify-center">
          <Button ghost type="primary" className={"w-[100px] h-[32px] my-2"}>
            客戶取件
          </Button>
          <Button type="primary" className={"w-[100px] h-[32px] my-2"}>
            店長收件
          </Button>
          <Button className={"w-[100px] h-[32px] my-2"}>詳情</Button>
          <Button
            className={
              "w-[100px] h-[32px] text-[#F44336] border-[#F44336] my-2"
            }
          >
            刪除服務單
          </Button>
        </div>
      ),
      linePay: "500",
      cash: "50",
      payStatus: "已付款",
      expand: <div>expand information</div>,
    },
    {
      key: "2",
      storeName: "公司名五個字:3",
      serviceNum: "001",
      customer: "客戶二(電話)",
      serviceProgress: "已取消",
      time: (
        <div>
          <div>1993/01/27</div> <div>10:00</div>
        </div>
      ),
      operation: (
        <div className="flex flex-col items-center justify-center">
          <Button ghost type="primary" className={"w-[100px] h-[32px] my-2"}>
            客戶取件
          </Button>
          <Button type="primary" className={"w-[100px] h-[32px] my-2"}>
            店長收件
          </Button>
          <Button className={"w-[100px] h-[32px] my-2"}>詳情</Button>
          <Button
            className={
              "w-[100px] h-[32px] text-[#F44336] border-[#F44336] my-2"
            }
          >
            刪除服務單
          </Button>
        </div>
      ),
      linePay: "500",
      cash: "50",
      payStatus: "尚缺款項",
      expand: <div>nothing here</div>,
    },
    {
      key: "3",
      storeName: "公司名",
      serviceNum: "002",
      customer: "客戶三(電話)",
      serviceProgress: "已取件",
      time: (
        <div>
          <div>1993/01/27</div> <div>09:00</div>
        </div>
      ),
      operation: (
        <div className="flex flex-col items-center justify-center">
          <Button ghost type="primary" className={"w-[100px] h-[32px] my-2"}>
            客戶取件
          </Button>
          <Button type="primary" className={"w-[100px] h-[32px] my-2"}>
            店長收件
          </Button>
          <Button className={"w-[100px] h-[32px] my-2"}>詳情</Button>
          <Button
            className={
              "w-[100px] h-[32px] text-[#F44336] border-[#F44336] my-2"
            }
          >
            刪除服務單
          </Button>
        </div>
      ),
      linePay: "500",
      cash: "50",
      payStatus: "已退款",
      expand: <div>nothing here</div>,
    },
  ];

  const incomeList: incomeItem[] = [
    { name: "總營收", value: "23000" },
    { name: "LINE Pay收入", value: "15000" },
    { name: "現金收入", value: "8000" },
  ];

  const orderList: orderItem[] = [
    { name: "未取件數", value: "12" },
    { name: "可取件數", value: "35" },
    { name: "已收件數", value: "7" },
  ];

  const okAction = () => {
    console.log("okAction");
  };

  const tabChange = (e: string) => {
    console.log(e, "Tab Changed");
  };
  return (
    <div className="w-full flex flex-col items-start justify-center bg-white p-[10px]">
      <Tabs
        size="large"
        tabBarStyle={{ color: "#999", fontSize: "18px" }}
        className={"w-full border-2"}
        defaultActiveKey="1"
        items={tabItems}
        onChange={tabChange}
      ></Tabs>

      <div className="w-full pt-[28px] flex flex-col items-start justify-center">
        <span className="text-[18px] font-bold">總覽</span>
        <div className="w-full flex flex-row items-center justify-between bg-[#E7F0F8]  mt-[8px]">
          {incomeList.map((income) => (
            <div
              key={income.name}
              className="flex flex-col items-start justify-center  p-[20px_24px]"
            >
              <span className="text-[12px] xl:text-[14px]">
                {income.name}：
              </span>
              <div className="mt-[5px]">
                <span className="text-[16px] xl:text-[20px] font-bold">
                  {toCurrency(income.value)}
                </span>
                <span className="text-[14px] xl:text-[16px] ml-[4px]">元</span>
              </div>
            </div>
          ))}

          <div className="border border-solid border-[#D9D9D9] h-[44px]"></div>

          {orderList.map((order) => (
            <div
              key={order.name}
              className="flex flex-col items-start justify-center  p-[20px_24px]"
            >
              <span className="text-[12px] xl:text-[14px]">{order.name}：</span>
              <div className="mt-[5px]">
                <span className="text-[16px] xl:text-[20px] font-bold">
                  {toCurrency(order.value)}
                </span>
                <span className="text-[14px] xl:text-[16px] ml-[4px]">元</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full pt-[28px] pb-[24px]">
        <span className="text-[18px] font-bold">查詢</span>
        <div className="flex flex-col items-start justify-center bg-[#F9F9F9] mt-[8px] p-[24px]">
          <span className="text-[14px] mb-[8px]">發送時間:</span>
          <div className="flex flex-row items-center justify-center">
            <DatePicker
              locale={zhTW}
              className={"w-[192px] h-[40px]"}
              suffixIcon={<img src={calendarIcon}></img>}
            ></DatePicker>

            <span className="mx-4">至</span>

            <DatePicker
              locale={zhTW}
              className={"w-[192px] h-[40px]"}
              suffixIcon={<img src={calendarIcon}></img>}
            ></DatePicker>
          </div>
          <div className="w-full flex justify-end pt-[20px]">
            <Button
              type="primary"
              className={"h-[32px] p-0 w-[80px] ml-[35px]"}
              onClick={okAction}
            >
              <span className="allCenter text-[14px]">查詢</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="box-border w-full flex flex-row items-center justify-between px-[16px]">
        <div className="font-bold">列表</div>
        <div className="flex flex-row items-center justify-center">
          <span className="text-[16px] text-[#484848]">總計：3筆</span>
          <Button
            type="primary"
            className={"h-[32px] p-0 w-[110px] ml-[35px]"}
            onClick={okAction}
          >
            <span className="allCenter text-[14px]">會出報表(.csv)</span>
          </Button>
        </div>
      </div>

      <Table
        className="w-full"
        columns={columns}
        dataSource={data}
        //   scroll={{
        //     y: 400,
        //   }}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.expand}
            </p>
          ),
        }}
        pagination={{
          // showSizeChanger: true,
          showQuickJumper: true,
          position: ["bottomCenter"],
        }}
      ></Table>
    </div>
  );
};

export default TablePage;
