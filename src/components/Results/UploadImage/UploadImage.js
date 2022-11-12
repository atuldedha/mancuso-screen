import React from "react";
import DropIcon from "../../../images/smallDropdown.png";

const UploadImage = () => {
  return (
    <div className="bg-middle w-full pb-[30px] md:pb-[52px] xl:pb-[71px] flex flex-col space-y-16 space-x-0 xl:flex-row xl:space-y-0 xl:space-x-16 pt-[60px] md:pt-[80px] xl:pt-[147px]">
      <div className="flex flex-col ml-[30px] md:ml-[50px] xl:ml-[107px] xl:basis-1/2">
        <span className="font-semibold font-plusJakarta text-[20px] md:text-[28px] xl:text-[48px] leading-[30px] md:leading-[44px] xl:leading-[64.5px] xl:-tracking-[1px] text-[#2C2A3B] flex mb-[34px] md:mb-[44px] xl:mb-[64px]">
          Upload your image and get your results
        </span>

        <span className="font-semibold font-plusJakarta text-[18px] md:text-[24px] xl:text-[28px] leading-[28px] md:leading-[34px] xl:leading-[41px] xl:-tracking-[1px] text-[#555555]">
          You are a
        </span>
        <div className="flex items-center mt-[8px] md:mt-[12px] xl:mt-[17px]">
          <div className="bg-white flex basis-1/3 items-center justify-between py-[8px] md:py-[12px] xl:py-[15px] px-[14px] md:px-[18px] xl:px-[24px] outline-none hover:cursor-pointer">
            <span className="">Man</span>
            <img src={DropIcon} alt="dropdown" />
          </div>
          <span className="flex ml-[20px] md:ml-[32px] xl:ml-[49px] underline font-medium font-plusJakarta text-[12px] md:text-[16px] xl:text-[20px] leading-[18px] md:leading-[22px] xl:leading-[27px] text-[#12141D] opacity-70 hover:cursor-pointer">
            Upload your photo
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-end xl:basis-1/2  pr-[30px] md:pr-[52px] xl:pr-[77px] xl:pt-[23px] pt-0">
        <span className="flex ml-[30px] md:ml-[50px] xl:ml-0 mb-[50px] md:mb-[60px] xl:mb-[150px] font-normal font-plusJakarta text-[10px] md:text-[12px] xl:text-[16px] leading-[18px] md:leading-[22px] xl:leading-[26px] text-[#565973]">
          Allways remember AI generates random images, that might contain
          nudity, or other disturbing scenes. If you do not want this, please do
          not use this service.
        </span>

        <button className="ml-[30px] md:ml-[50px] xl:ml-0 text-[12px] md:text-[16px] xl:text-[20px] w-max bg-[#7D2AE8] py-[10px] md:py-[14px] xl:py-[17px] px-[22px] md:px-[28px] xl:px-[35px] text-white font-plusJakarta font-semibold leading-[20px] md:leading-[24px] xl:leading-[34px] rounded-[7px] shadow-btn hover:scale-105">
          Generate photo for $16.00
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
