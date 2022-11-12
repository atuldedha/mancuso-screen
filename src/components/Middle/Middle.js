import React from "react";
import CardsImage from "../../images/cardsImage.png";
import ArrowIcon from "../../images/smallArrow.png";
import Ellipse1 from "../../images/circle1.png";
import Ellipse2 from "../../images/circle2.png";

const Middle = () => {
  return (
    <div className="px-[48px] md:px-[100px] xl:px-[221px] py-[40px] md:py-[80px] xl:py-[125px] bg-middle flex flex-col xl:flex-row xl:items-center relative">
      <div className="flex items-center justify-center basis-1/2">
        <img
          src={CardsImage}
          alt="pc"
          className="w-[200px] h-[250px] md:w-[400px] md:h-[500px] xl:w-[680px] xl:object-contain"
        />
      </div>
      <div className="xl:ml-[89px] mt-[20px] flex flex-col items-center xl:items-start">
        <span className="font-plusJakarta text-center xl:text-start font-semibold text-[20px] md:text-[44px] xl:text-[64px] leading-[40px] md:leading-[54px] xl:leading-[82px] xl:-tracking-[1px] text-[#2C2A3B]">
          Not just for
          <span className="font-playFair font-medium italic">you</span>, your
          loved ones too
        </span>

        <span className="font-plusJakarta font-normal text-[10px] md:text-[14px] xl:text-[18px] leading-[18px] md:leading-[22px] xl:leading-[29px] text-[#12141D] opacity-[0.7] w-[200px] md:w-[400px] xl:w-[680px] mt-[17px] flex">
          For ethical reasons, we have trained the AI to only paint exclusively
          in the style of artists who are no longer around anymore. Because the
          living artists still need to make a living!The AI will learn about you
          from your photos, so please only upload selfies that most accurately
          represent you.
        </span>
        <span className="font-plusJakarta font-normal text-[10px] md:text-[14px] xl:text-[18px] leading-[18px] md:leading-[22px] xl:leading-[29px] text-[#12141D] opacity-[0.7] w-[200px] md:w-[400px] xl:w-[680px] mt-[30px] flex">
          Feeling a little intimidated? You can start by offering this
          experience to a friend instead. We'll prepare the museum for them and
          you can share the link with them as a gift.And while you're feeling
          generous, please consider to share with your friends and show the
          world what the future looks like.
        </span>

        <button className="flex items-center mt-[30px] bg-[#7D2AE8] py-[10px] md:py-[14px] pl-[20px] md:pl-[28px] pr-[18px] md:pr-[24px] xl:py-[17px] xl:pl-[32px] xl:pr-[29px] text-white text-[10px] md:text-[18px] xl:text-[20px] font-plusJakarta font-semibold leading-[24px] md:leading-[28px] xl:leading-[34px] rounded-[7px] shadow-btn hover:scale-105">
          Get Started
          <img src={ArrowIcon} alt="arrow" className="ml-3" />
        </button>
      </div>

      <img
        src={Ellipse1}
        alt="ellipse"
        className="absolute w-[50px] xl:w-[80px] top-[85px] right-0"
      />
      <img
        src={Ellipse2}
        alt="ellipse"
        className="absolute w-[60px] xl:w-[150px] bottom-[57px] left-0"
      />
    </div>
  );
};

export default Middle;
