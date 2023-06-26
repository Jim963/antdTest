import { useState } from "react";

const Button = ({ title, size = "big", type = "dark", noBorder = false }) => {
  const btnSize = () => {
    let finalSize;
    switch (size) {
      case "big":
        finalSize = "w-[200px] h-[48px]";
      case "middle":
        finalSize = "w-[150px] h-[48px]";
      case "small":
        finalSize = "w-[100px] h-[32px]";
    }
    return finalSize;
  };

  const btnType = () => {
    let finalType;
    switch (type) {
      case "dark":
        finalType = "text-[#FFF] bg-[#F8F8F8]";
      case "light":
        finalType = "text-[#F8F8F8] bg-[#FFF] border-[#275682]";
      case "normal":
        finalType = "text-[#484848] bg-[#FFF] border-[#999]";
    }
    return finalType;
  };
  return (
    <div
      className={`border rounded-[8px] ${
        noBorder ? "border-none" : null
      } ${btnSize()} ${btnType()}`}
    >
      {title}
    </div>
  );
};

export default Button;
