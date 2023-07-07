import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "antd";
import { RootState } from "../../store";
interface props {
  width?: string;
}
const AlertDisplay = ({ width = "w-[260px]" }: props) => {
  const alertList = useSelector((state: RootState) => state.alerts.alertList);

  return (
    <div className="top-8 horizonCenter flex flex-col items-center justify-center">
      {alertList.map((item) => (
        <div key={item.id} className={`${width} py-2`}>
          <Alert message={item.text} type={item.type} showIcon closable />
        </div>
      ))}
    </div>
  );
};

export default AlertDisplay;
