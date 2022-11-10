import React from "react";
import ArrowIcon from "../../images/smallArrow.png";
import GroupImage from "../../images/group.png";

const Title = () => {
  return (
    <div className="flex overflow-hidden pb-[74px] bg-[#0B0F19]  pl-[187px] ">
      <div className="basis-1/2">
        <span className="mt-[70px] block font-plusJakarta font-semibold leading-[98.5px] -tracking-[1px] text-[#F2F0FF] text-[84px] mb-7">
          We <span className="font-playFair font-normal italic">generate</span>{" "}
          AI museum-quality prints directly
        </span>

        <span className="font-medium font-plusJakarta text-[18px] leading-[34px] text-[#DEDAFF] flex mb-14">
          You can use the resulting images on social media, but also order
          museum-quality prints directly. All you need to do is to upload a few
          photos of yourself, and our busy little AIrtists will magically paint
          them in multiple styles and hang them your museum in only a few
          minutes.
        </span>

        <div className="flex items-center mb-[211px]">
          <button className="flex items-center text-[20px] bg-[#7D2AE8] py-[17px] pl-[32px] pr-[29px] text-white font-plusJakarta font-semibold leading-[34px] rounded-[7px] shadow-btn">
            Create your Photos
            <img src={ArrowIcon} alt="arrow" className="ml-3" />
          </button>

          <div className="font-plusJakarta text-white text-[20px] leading-[34.5px] font-semibold ml-[77px] underline">
            Learn More
          </div>
        </div>
      </div>
      <div className="basis-1/2">
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
