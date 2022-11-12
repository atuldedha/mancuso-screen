import React, { useState } from "react";
import ArrowDown from "../../../../images/arrowClose.png";
import ArrowUp from "../../../../images/arrowOpen.png";

const FaqCard = ({ ques, ans }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-[16px] md-px-[22px] xl:px-[24px] py-[15px] md:py-[18px] xl:py-[21px] shadow-faqCard rounded-[8px] bg-white flex flex-col mb-[16px]">
      <div
        className="flex items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-[#0B0F19] font-plusJakarta text-[10px] md:text-[14px] xl:text-[16px] leading-[18px] md:leading-[22px] xl:leading-[26px]">
          {ques}
        </span>
        <img
          src={open ? ArrowUp : ArrowDown}
          alt="down"
          className={`${
            open ? "mt-4" : "mt-0"
          } h-[36px] w-[36px] object-contain ml-4`}
        />
      </div>

      <div
        className={`${
          open ? "flex" : "hidden"
        } mt-[12px] md:mt-[16px] xl:mt-[21px] font-plusJakarta font-normal text-[12px] xl:text-[14px] leading-[22.4px] text-[#565973]`}
      >
        {ans}
      </div>
    </div>
  );
};

export default FaqCard;
