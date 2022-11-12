import React from "react";
import ArrowIcon from "../../images/smallArrow.png";
import GroupImage from "../../images/group.png";

const Title = () => {
  return (
    <div className="flex overflow-hidden pb-[20px] pl-[40px] md:pb-[40px] md:pl-[90px] xl:pb-[74px] bg-[#0B0F19] xl:pl-[187px]">
      <div className="xl:basis-1/2">
        <span className="w-[85%] xl:w-full mt-[38px] md:mt-[40px] xl:mt-[70px] block font-plusJakarta font-semibold leading-[34px] md:leading-[40px] xl:leading-[98.5px] xl:-tracking-[1px] text-[#F2F0FF] text-[40px] md:text-[44px] xl:text-[84px] mb-7">
          We <span className="font-playFair font-normal italic">generate</span>{" "}
          AI museum-quality prints directly
        </span>

        <span className="font-medium font-plusJakarta text-[10px] md:text-[14px] xl:text-[18px] leading-[14px] md:leading-[24px] xl:leading-[34px] text-[#DEDAFF] flex mb-14 w-[60%] xl:w-full">
          You can use the resulting images on social media, but also order
          museum-quality prints directly. All you need to do is to upload a few
          photos of yourself, and our busy little AIrtists will magically paint
          them in multiple styles and hang them your museum in only a few
          minutes.
        </span>

        <div className="flex items-center mb-[90px] md:mb-[150px] xl:mb-[211px]">
          <button className="flex items-center text-[10px] md:text-[18px] xl:text-[20px] bg-[#7D2AE8] py-[10px] md:py-[14px] pl-[20px] md:pl-[28px] pr-[18px] md:pr-[24px] xl:py-[17px] xl:pl-[32px] xl:pr-[29px] text-white font-plusJakarta font-semibold leading-[24px] md:leading-[28px] xl:leading-[34px] rounded-[7px] shadow-btn hover:scale-105">
            Create your Photos
            <img src={ArrowIcon} alt="arrow" className="ml-3" />
          </button>

          <div className="font-plusJakarta text-white text-[10px] md:text-[18px] xl:text-[20px] leading-[20px] md:leading-[28px] xl:leading-[34.5px] font-semibold ml-[30px] md:ml-[44px] xl:ml-[77px] underline">
            Learn More
          </div>
        </div>
      </div>
      <div className="hidden xl:inline-block xl:basis-1/2">
        <img
          src={GroupImage}
          alt="pic"
          className="absolute w-[50%] top-1 right-[1px]"
        />
      </div>
    </div>
  );
};

export default Title;
