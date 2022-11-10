import React from "react";
import CardsImage from "../../images/cardsImage.png";
import ArrowIcon from "../../images/smallArrow.png";
import Ellipse1 from "../../images/circle1.png";
import Ellipse2 from "../../images/circle2.png";

const Middle = () => {
  return (
    <div className="px-[221px] py-[125px] bg-middle flex items-center relative">
      <div className="basis-1/2">
        <img src={CardsImage} alt="pc" className="" />
      </div>
      <div className="ml-[89px] flex flex-col items-start">
        <span className="font-plusJakarta font-semibold text-[64px] leading-[82px] -tracking-[1px] text-[#2C2A3B]">
          Not just for{" "}
          <span className="font-playFair font-medium italic">you</span>, your
          loved ones too
        </span>

        <span className="font-plusJakarta font-normal text-[18px] leading-[29px] text-[#12141D] opacity-[0.7] w-[680px] mt-[17px] flex">
          For ethical reasons, we have trained the AI to only paint exclusively
          in the style of artists who are no longer around anymore. Because the
          living artists still need to make a living!The AI will learn about you
          from your photos, so please only upload selfies that most accurately
          represent you.
        </span>
        <span className="font-plusJakarta font-normal text-[18px] leading-[29px] text-[#12141D] opacity-[0.7] w-[680px] mt-[30px] flex">
          Feeling a little intimidated? You can start by offering this
          experience to a friend instead. We'll prepare the museum for them and
          you can share the link with them as a gift.And while you're feeling
          generous, please consider to share with your friends and show the
          world what the future looks like.
        </span>

        <button className="flex items-center mt-[30px] bg-[#7D2AE8] py-[17px] pl-[32px] pr-[29px] text-white text-[20px] font-plusJakarta font-semibold leading-[34px] rounded-[7px] shadow-btn">
          Get Started
          <img src={ArrowIcon} alt="arrow" className="ml-3" />
        </button>
      </div>

      <img
        src={Ellipse1}
        alt="ellipse"
        className="absolute top-[85px] right-0"
      />
      <img
        src={Ellipse2}
        alt="ellipse"
        className="absolute bottom-[57px] left-0"
      />
    </div>
  );
};

export default Middle;
