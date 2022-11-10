import React from "react";
import ResultCardOption from "./ResultCardOption/ResultCardOption";

const ResultsCard = ({ heading, optionTexts }) => {
  return (
    <div className="w-full flex flex-col pt-[44px] h-[395px] pl-[55px] pr-[30px] bg-white shadow-lg rounded-[8px]">
      <span className="font-plusJakarta font-medium -tracking-[1px] leading-[38px] text-[24px] text-[#555555] flex mb-[26px]">
        {heading}
      </span>

      {optionTexts.map((text, index) => (
        <ResultCardOption text={text} key={index} />
      ))}
    </div>
  );
};

export default ResultsCard;
