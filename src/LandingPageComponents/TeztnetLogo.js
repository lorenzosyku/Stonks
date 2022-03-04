import React from "react";
import { useNavigate } from "react-router-dom";

function TeztnetLogo() {
  const backHome = useNavigate();
  return (
    <div className="p-5">
      <div
        className="cursor-pointer"
        onClick={() => {
          backHome("/");
        }}
      >
        <h2 className="font-poppins text-xl text-shade-lightblue italic font-semibold">
          TeztNet<span className="text-amber-400">-V1</span>
        </h2>
        <h4 className="italic font-poppins font-semibold text-xs">
          Beta Version
        </h4>
      </div>
    </div>
  );
}

export default TeztnetLogo;
