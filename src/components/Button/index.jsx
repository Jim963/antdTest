import { useState } from "react";

const Button = ({ title, size = "big", type = "dark", noBorder = false }) => {
  const btnSize = () => {
    let finalSize;
    switch (size) {
      case "big":
        finalSize = "w-btnBig h-btnBig";
        break;
      case "middle":
        finalSize = "w-btnMiddle h-btnMiddle";
        break;
      case "small":
        finalSize = "w-btnSmall h-btnSmall";
        break;
    }
    return finalSize;
  };

  const btnType = () => {
    let finalType;
    switch (type) {
      case "dark":
        finalType = "text-white bg-navyBlue";
        break;
      case "light":
        finalType = "text-navyBlue bg-white border-navyBlue";
        break;
      case "normal":
        finalType = "text-black bg-white border-btnBorder";
        break;
    }
    return finalType;
  };
  return (
    <div
      className={`border rounded-btnRadius ${
        noBorder ? "border-none" : null
      } ${btnSize()} ${btnType()}`}
    >
      {title}
    </div>
  );
};

export default Button;
