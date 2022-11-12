import React from "react";
import Check from "../../../../images/checkblue.png";

const ResultCardOption = ({ text }) => {
  return (
    <div className="w-full flex items-start">
      <img src={Check} alt="check" className="mt-1" />
      <span className="flex mb-[12px] ml-[5px] md:ml-[8px] xl:ml-[10px] font-plusJakarta font-normal text-[10px] md:text-[14px] xl:text-[16px] leading-[18px] md:leading-[22px] xl:leading-[26px] text-[#565973]">
        {text}
      </span>
    </div>
  );
};

export default ResultCardOption;
