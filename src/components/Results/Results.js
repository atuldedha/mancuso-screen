import React from "react";
import Faq from "./Faq/Faq";
import ResultsCard from "./ResultsCard/ResultsCard";
import UploadImage from "./UploadImage/UploadImage";
import Ellipse1 from "../../images/newResultCircle1.png";
import Ellipse2 from "../../images/newResultCircle2.png";

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
    <div className="relative py-[50px] md:py-[90px] xl:py-[135px] bg-white flex flex-col items-center justify-center">
      <span className="inline-block font-plusJakarta font-semibold text-[20px] md:text-[44px] xl:text-[64px] leading:[40px] md:leading-[60px] xl:leading-[82px] xl:-tracking-[1px] text-[#2C2A3B] mb-[29px]">
        How to get
        <span className="font-playFair italic font-medium">best</span> results
      </span>
      <span className="flex font-normal px-[48px] text-[10px] md:text-[14px] xl:text-[18px] leading-[18px] md:leading-[24px] xl:leading-[29px] font-plusJakarta opacity-[0.7] text-[#12141D] mb-[10px]">
        Following these guidelines will make sure that you'll get the best
        results possible.
      </span>

      <div className="flex flex-col xl:flex-row xl:items-center px-[48px] md:px-[100px] xl:px-[221px] space-y-[30px] space-x-0 xl:space-x-[59px] xl:space-y-0">
        <ResultsCard heading={heading} optionTexts={optionsText1} />
        <ResultsCard heading={heading} optionTexts={optionsText2} />
      </div>

      <div className="px-[48px] md:px-[100px] xl:px-[221px] w-full">
        <UploadImage />
      </div>

      <div>
        <Faq />
      </div>

      <img
        src={Ellipse1}
        alt="ellipse"
        className="absolute w-[40px] md:w-[100px] xl:w-[150px] top-[623pxpx] left-0"
      />
      <img
        src={Ellipse2}
        alt="ellipse"
        className="absolute w-[40px] md:w-[100px] xl:w-[150px] bottom-[702px] right-0"
      />
    </div>
  );
};

export default Results;
