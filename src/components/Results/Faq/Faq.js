import React from "react";
import ArrowIcon from "../../../images/smallArrow.png";
import FaqCard from "./FaqCard/FaqCard";

const Faq = () => {
  const faqs = [
    {
      ques: "Who are you?",
      ans: "Please upload as many photos of yourself as you like, but make sure to include at least one with a neutral facial expression in good lighting.",
    },
    {
      ques: "So this is a non-profit project?",
      ans: "Please upload as many photos of yourself as you like, but make sure to include at least one with a neutral facial expression in good lighting.",
    },
    {
      ques: "What happens if I don't like the artworks?",
      ans: "Please upload as many photos of yourself as you like, but make sure to include at least one with a neutral facial expression in good lighting.",
    },
    {
      ques: "What kind of photos should I upload?",
      ans: "Please upload as many photos of yourself as you like, but make sure to include at least one with a neutral facial expression in good lighting.",
    },
    {
      ques: "Why are all the paintings portraits of myself?",
      ans: "Please upload as many photos of yourself as you like, but make sure to include at least one with a neutral facial expression in good lighting.",
    },
    {
      ques: "What if I want a copy of the artwork?",
      ans: "Please upload as many photos of yourself as you like, but make sure to include at least one with a neutral facial expression in good lighting.",
    },
  ];
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between bg-white px-[48px] md:px-[100px] xl:px-[221px] py-[50px] md:py-[100px] xl:py-[150px]">
      <div className="basis-1/2 flex flex-col ">
        <span className="block mb-[25px] xl:w-[40%] font-extrabold font-manrope text-[20px] md:text-[44px] xl:text-[64px] xl:-tracking-[1px] leading-[30px] md:leading-[50px] xl:leading-[82px] text-[#2C2A3B]">
          Frequently Asked
          <span className="font-playFair font-medium"> Questions</span>
        </span>

        <span className="flex mb-[36px] font-normal font-plusJakarta text-[16px] leading-[26px] text-[#565973]">
          Still have unanswered questions and need to get in touch?
        </span>

        <button className="flex w-max mb-[30px] xl:mb-0 items-center text-[10px] md:text-[18px] xl:text-[20px] bg-[#7D2AE8] py-[10px] md:py-[14px] pl-[20px] md:pl-[28px] pr-[18px] md:pr-[24px] xl:py-[17px] xl:pl-[32px] xl:pr-[29px] text-white font-plusJakarta font-semibold leading-[24px] md:leading-[28px] xl:leading-[34px] rounded-[7px] shadow-btn hover:scale-105">
          Create your Photos
          <img src={ArrowIcon} alt="arrow" className="ml-3" />
        </button>
      </div>

      <div className="basis-1/2">
        {faqs.map((faq, index) => (
          <FaqCard key={index} ques={faq.ques} ans={faq.ans} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
