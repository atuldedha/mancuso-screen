import React, { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex items-center bg-[#0B0F19] pl-[40px] md-pl-[90px] xl:pl-[187px] pt-[20px] md:pt-[34px] xl:pt-[46px]">
      <span className="text-[20px] md:-[28px] xl:text-[34px] text-[#F2F0FF] font-plusJakarta font-semibold -tracking-[1.44px]">
        Paint.<span className="font-playFair text-[#7D2AE8]">ai</span>
      </span>
      <div className="border-l-2 border-l-[rgba(222,218,255)] opacity-[0.4] w-2 mt-[4px] h-[16px] ml-[28px] mr-[38px]" />
      <span
        className={`${
          selected === 1 ? "font-semibold" : "font-normal"
        } text-[#F2F0FF] text-[10px] md:text-[14px] xl:text-[18px] font-inter text-center leading-[14px] md:leading-[18px] xl:leading-[24px] hover:cursor-pointer`}
        onClick={() => setSelected(1)}
      >
        Home
      </span>
      <span
        className={`${
          selected === 2 ? "font-semibold" : "font-normal"
        } text-[#F2F0FF] text-[10px] md:text-[14px] xl:text-[18px] font-inter text-center leading-[14px] md:leading-[18px] xl:leading-[24px] hover:cursor-pointer mx-[20px] md:mx-[32px] xl:mx-[41px]`}
        onClick={() => setSelected(2)}
      >
        How it works
      </span>
      <span
        className={`${
          selected === 3 ? "font-semibold" : "font-normal"
        } text-[#F2F0FF] text-[10px] md:text-[14px] xl:text-[18px] font-inter text-center leading-[14px] md:leading-[18px] xl:leading-[24px] hover:cursor-pointer`}
        onClick={() => setSelected(3)}
      >
        Contact us
      </span>
    </div>
  );
};

export default Header;
