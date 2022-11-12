import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-middle pt-[30px] md:pt-[50px] xl:pt-[75px] pb-[10px] xl:pb-[13px]">
      <span className="text-[20px] md:-[28px] xl:text-[34px] text-[#2C2A3B] font-plusJakarta font-semibold -tracking-[1.44px]">
        Paint.<span className="font-playFair text-[#7D2AE8]">ai</span>
      </span>

      <div className="flex items-center space-x-[30px] md:space-x-[40px] xl:space-x-[56px] mt-[22px] md:mt-[32px] xl:mt-[52px] mb-[28px] md:mb-[44px] xl:mb-[59px]">
        <span className="font-plusJakarta font-semibold text-[10px] md:text-[12px] xl:text-[16px] leading-[20px] md:leading-[24px] xl:leading-[26px] opacity-[0.85] text-[#2C2A3B]">
          Home
        </span>
        <span className="font-plusJakarta font-semibold text-[10px] md:text-[12px] xl:text-[16px] leading-[20px] md:leading-[24px] xl:leading-[26px] opacity-[0.85] text-[#2C2A3B]">
          Features
        </span>
        <span className="font-plusJakarta font-semibold text-[10px] md:text-[12px] xl:text-[16px] leading-[20px] md:leading-[24px] xl:leading-[26px] opacity-[0.85] text-[#2C2A3B]">
          Overview
        </span>
        <span className="font-plusJakarta font-semibold text-[10px] md:text-[12px] xl:text-[16px] leading-[20px] md:leading-[24px] xl:leading-[26px] opacity-[0.85] text-[#2C2A3B]">
          Contact
        </span>
      </div>

      <span className="font-plusJakarta text-[10px] md:text-[12px] xl:text-[14px] leading-[16px] xl:leading-[22px] text-center font-normal opacity-50 text-[#2C2A3B]">
        © 2022 DPPR, All Rights Reserved, developed by Sascha Maigatter
      </span>
    </div>
  );
};

export default Footer;
