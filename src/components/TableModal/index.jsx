import { Modal, Tabs, Table, Tag, Space, Button, DatePicker } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const TableModal = ({ title, isOpen, cancelAction, isCloseIcon = true }) => {
  const tabItems = [
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
  const columns = [
    {
      title: "門市名稱",
      dataIndex: "storeName",
      key: "name",
      className: "",
      render: (text) => {
        let emptyArr = [];
        let restWord = text;
        while (restWord.length > 0) {
          emptyArr.push(restWord.slice(0, 5));
          restWord = restWord.slice(5);
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
      dataIndex: "age",
      key: "age",
      className: "",
    },
    Table.EXPAND_COLUMN,
    {
      title: "客戶姓名",
      dataIndex: "address",
      key: "address",
      className: "",
    },
    {
      title: "客戶聯絡電話",
      key: "tags",
      dataIndex: "tags",
      className: "",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "服務項目",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      storeName: "一二三四五六1234",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      description: "Hide in bush , teemo on duty!",
    },
    {
      key: "2",
      storeName: "一二三四五",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
      description: "Hide in bush , teemo on duty!",
    },
    {
      key: "3",
      storeName: "一二三四五",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
      description: "Hide in bush , teemo on duty!",
    },
    {
      key: "4",
      storeName: "一二三四五六",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
      description: "Hide in bush , teemo on duty!",
    },
    {
      key: "五四三二一",
      storeName: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
      description: "Hide in bush , teemo on duty!",
    },
    {
      key: "6",
      storeName: "公司名五個字:3",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
      description: (
        <div className="w-[50px] h-[50px] bg-blue-200 rounded-full"></div>
      ),
    },
    {
      key: "7",
      storeName: "超過五個字拉拉",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "8",
      storeName: "一二三四五六",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "9",
      storeName: "七六五四三二一",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "10",
      storeName: "一二三",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "11",
      storeName: "四五六七",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "12",
      storeName: "098765432",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const okAction = () => {
    console.log("okAction");
  };
  const tabMoreContent = () => {
    return (
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
    );
  };

  const tabChange = (e) => {
    console.log(e, "看看");
  };
  return (
    <>
      <Modal
        title={null}
        footer={null}
        width={"100%"}
        height={"95%"}
        centered
        closable={isCloseIcon}
        open={isOpen}
        closeIcon={<CloseCircleFilled style={{ fontSize: "28px" }} />}
        onCancel={cancelAction}
        maskClosable={false}
        bodyStyle={{ padding: "12px 16px 20px 16px" }}
      >
        <div className="text-[22px] font-bold pb-[20px]">{title}</div>

        <Tabs
          size="large"
          tabBarStyle={{ color: "#999", fontSize: "18px" }}
          pagination={{
            position: ["bottomCenter"],
          }}
          defaultActiveKey="1"
          items={tabItems}
          tabBarExtraContent={tabMoreContent()}
          onChange={tabChange}
        ></Tabs>

        <div className="pt-[28px]">
          <span className="text-[18px] font-bold">總覽</span>
          <div className="flex flex-col items-start justify-center bg-[#E7F0F8] mt-[8px] p-[20px_24px]">
            <span className="text-[14px]">簡訊發送量:</span>
            <div>
              <span className="text-[20px]">666</span>
              <span className="text-[16px] ml-[4px]">元</span>
            </div>
          </div>
        </div>

        <div className="pt-[28px] pb-[24px]">
          <span className="text-[18px] font-bold">查詢</span>
          <div className="flex flex-col items-start justify-center bg-[#F9F9F9] mt-[8px] p-[24px]">
            <span className="text-[14px]">發送時間:</span>
            <div className="flex flex-row items-center justify-center">
              <DatePicker></DatePicker>

              <span className="mx-4">至</span>

              <DatePicker></DatePicker>
            </div>
          </div>
        </div>
        <Table
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
                {record.description}
              </p>
            ),
          }}
          pagination={{
            // showSizeChanger: true,
            showQuickJumper: true,
          }}
        ></Table>
      </Modal>
    </>
  );
};

export default TableModal;
