import { useDispatch, useSelector } from "react-redux";
import { Alert } from "antd";

const AlertDisplay = () => {
  const alertList = useSelector((state) => state.alerts.alertList);

  return (
    <div className="top-8 horizonCenter flex flex-col items-center justify-center">
      {alertList.map((item) => (
        <div key={item.id} className="w-[500px] py-2">
          <Alert message={item.text} type={item.type} showIcon closable />
        </div>
      ))}
    </div>
  );
};

export default AlertDisplay;
