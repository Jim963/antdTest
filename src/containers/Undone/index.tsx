import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";

const Undone = () => {
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
  const okAction = () => {
    console.log("okAction");
  };
  return (
    <div className="w-full flex flex-col items-start justify-center bg-white p-[10px]">
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

export default Undone;
