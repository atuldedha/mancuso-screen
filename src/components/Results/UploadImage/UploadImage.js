import React from "react";
import DropIcon from "../../../images/smallDropdown.png";

const UploadImage = () => {
  return (
    <div className="bg-middle w-full h-[529px] pb-[71px] flex space-x-16">
      <div className="flex flex-col ml-[107px] mt-[147px] basis-1/2">
        <span className="font-semibold font-plusJakarta text-[48px] leading-[64.5px] -tracking-[1px] text-[#2C2A3B] flex mb-[64px]">
          Upload your image and get your results
        </span>

        <span className="font-semibold font-plusJakarta text-[28px] leading-[41px] -tracking-[1px] text-[#555555]">
          You are a
        </span>
        <div className="flex items-center mt-[17px]">
          <div className="bg-white flex basis-1/3 items-center justify-between py-[15px] px-[24px] outline-none hover:cursor-pointer">
            <span className="">Man</span>
            <img src={DropIcon} alt="dropdown" />
          </div>
          <span className="flex ml-[49px] underline font-medium font-plusJakarta text-[20px] leading-[27px] text-[#12141D] opacity-70 hover:cursor-pointer">
            Upload your photo
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end basis-1/2 mt-[147px] pr-[77px]">
        <span className="flex mb-[150px] font-normal font-plusJakarta text-[16px] leading-[26px] text-[#565973]">
          Allways remember AI generates random images, that might contain
          nudity, or other disturbing scenes. If you do not want this, please do
          not use this service.
        </span>

        <button className="text-[20px] w-max bg-[#7D2AE8] py-[17px] px-[35px] text-white font-plusJakarta font-semibold leading-[34px] rounded-[7px] shadow-btn hover:scale-105">
          Generate photo for $16.00
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
