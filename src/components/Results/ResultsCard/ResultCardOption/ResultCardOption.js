import React from "react";
import Check from "../../../../images/checkblue.png";

const ResultCardOption = ({ text }) => {
  return (
    <div className="w-full flex items-start">
      <img src={Check} alt="check" className="mt-1" />
      <span className="flex mb-[12px] ml-[10px] font-plusJakarta font-normal text-[16px] leading-[26px] text-[#565973]">
        {text}
      </span>
    </div>
  );
};

export default ResultCardOption;
