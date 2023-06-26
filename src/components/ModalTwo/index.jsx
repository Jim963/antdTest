import { useState, useEffect } from "react";
import Button from "../Button";

const ModalTwo = ({ title, isOpen, okAction, cancelAction }) => {
  return (
    <>
      {isOpen && (
        <div
          className="w-[600px] h-[535px] rounded-[24px]
  shadow-[0_3px_12px_0_rgba(0,0,0,0.08)] p-[32px 40px 40px]"
        >
          <div className="font-[22px] bold text-[#484848]">{title}</div>

          <div className="flex flex-row items-center justify-center">
            <Button title={"helloTest"} size={"big"} type={"dark"}></Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTwo;
