import { useState, useEffect } from "react";
import Button from "../Button";

const ModalTwo = ({ title, isOpen, okAction, cancelAction }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-modalWidth h-modalHeight rounded-modalRadius shadow-modalShadow p-modalPadding">
          <div className="text-modalTitle bold text-black">{title}</div>

          <div className="flex flex-row items-center justify-center">
            <Button title="helloTest" size="big" type="dark"></Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTwo;
