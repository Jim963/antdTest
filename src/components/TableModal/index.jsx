import { Modal, Table, Tag, Space } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const TableModal = ({
  title,
  isOpen,
  okAction,
  cancelAction,
  isCloseIcon = true,
}) => {
  const columns = [
    {
      title: "門市名稱",
      dataIndex: "storeName",
      key: "name",
      className: "w-[110px]",
      render: (text) => {
        let emptyArr = [];
        let restWord = text;
        while (restWord.length > 0) {
          emptyArr.push(restWord.slice(0, 5));
          restWord = restWord.slice(5);
          console.log(emptyArr, "watch it");
        }

        return (
          <div style={{ wordWrap: "break-word", wordBreak: "break-word" }}>
            {emptyArr.map((item) => (
              <span>{item}</span>
            ))}
          </div>
        );
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      className: "",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      className: "",
    },
    {
      title: "Tags",
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
      title: "Action",
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
      storeName: "一二三四五六12345678909876543",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      storeName: "一二三四五",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      storeName: "一二三四五",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      storeName: "一二三四五六",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "五四三二一",
      storeName: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "6",
      storeName: "公司名五個字",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "7",
      storeName: "dude that dope",
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
  return (
    <>
      <Modal
        title={null}
        footer={null}
        width={"100%"}
        centered
        closable={isCloseIcon}
        open={isOpen}
        closeIcon={<CloseCircleFilled style={{ fontSize: "28px" }} />}
        onCancel={cancelAction}
        maskClosable={false}
        bodyStyle={{ padding: "12px 16px 20px 16px" }}
      >
        <Table columns={columns} dataSource={data}></Table>
      </Modal>
    </>
  );
};

export default TableModal;
