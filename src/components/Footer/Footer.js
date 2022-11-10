import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0B0F19] pt-[75px] pb-[13px]">
      <span className="text-[34px] text-[#F2F0FF] font-plusJakarta font-semibold -tracking-[1.44px]">
        Paint.<span className="font-playFair text-[#7D2AE8]">ai</span>
      </span>

      <div className="flex items-center space-x-[56px] mt-[52px] mb-[59px]">
        <span className="font-plusJakarta font-semibold text-[16px] leading-[26px] opacity-[0.85] text-white">
          Home
        </span>
        <span className="font-plusJakarta font-semibold text-[16px] leading-[26px] opacity-[0.85] text-white">
          Features
        </span>
        <span className="font-plusJakarta font-semibold text-[16px] leading-[26px] opacity-[0.85] text-white">
          Overview
        </span>
        <span className="font-plusJakarta font-semibold text-[16px] leading-[26px] opacity-[0.85] text-white">
          Contact
        </span>
      </div>

      <span className="font-plusJakarta text-[14px] leading-[22px] text-center font-normal opacity-50 text-white">
        © 2022 DPPR, All Rights Reserved, developed by Sascha Maigatter
      </span>
    </div>
  );
};

export default Footer;
