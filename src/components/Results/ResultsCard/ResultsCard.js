import React from "react";
import ResultCardOption from "./ResultCardOption/ResultCardOption";

const ResultsCard = ({ heading, optionTexts }) => {
  return (
    <div className="w-full flex flex-col pt-[44px] pb-[20px] xl:pb-[0px] xl:h-[450px] pl-[30px] md:pl-[40px] xl:pl-[55px] pr-[18px] md:pr-[24px] xl:pr-[30px] bg-white shadow-lg rounded-[8px]">
      <span className="font-plusJakarta font-medium xl:-tracking-[1px] leading-[28px] md:leading-[28px] xl:leading-[38px] text-[16px] md:text-[20px] xl:text-[24px] text-[#555555] flex mb-[26px]">
        {heading}
      </span>

      {optionTexts.map((text, index) => (
        <ResultCardOption text={text} key={index} />
      ))}
    </div>
  );
};

export default ResultsCard;
