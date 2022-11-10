import React from "react";
import ResultsCard from "./ResultsCard/ResultsCard";
import UploadImage from "./UploadImage/UploadImage";

const Results = () => {
  const heading =
    "To get the best results make sure your images follow these Dos";
  const optionsText1 = [
    "Upload ~20 images of yourself:",
    "10 portrait photos of yourself, showing the face and shoulders",
    "5 photos from your chest and up",
    "5 photos of your full body",
    "At least 1 Image with a neutral expression",
  ];
  const optionsText2 = [
    "Use different facial expressions",
    "Use different facial expressions",
    "Your images should have different lighting conditions",
    "Make sure your images are in focus",
    "Take different angles, some looking directly into the camera, some looking away",
  ];
  return (
    <div className="py-[135px] bg-white flex flex-col items-center justify-center">
      <span className="flex font-plusJakarta font-semibold text-[64px] leading-[82px] -tracking-[1px] text-[#2C2A3B] mb-[29px]">
        How to get
        <span className="font-playFair italic font-medium">best</span> results
      </span>
      <span className="flex font-normal text-[18px] leading-[29px] font-plusJakarta opacity-[0.7] text-[#12141D] mb-[10px]">
        Following these guidelines will make sure that you'll get the best
        results possible.
      </span>

      <div className="flex items-center px-[221px] space-x-[59px]">
        <ResultsCard heading={heading} optionTexts={optionsText1} />
        <ResultsCard heading={heading} optionTexts={optionsText2} />
      </div>

      <div className="px-[221px] w-full">
        <UploadImage />
      </div>
    </div>
  );
};

export default Results;
