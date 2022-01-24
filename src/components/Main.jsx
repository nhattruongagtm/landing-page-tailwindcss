import React from "react";

export default function Main() {
  return (
      <>
    <div className="max-w-[1100px] mx-auto mb-[20px] sm:mb-[102px]">
      <p className="mb-[40px] sm:mb-[70px] text-center sm:text-[40px] text-[25px]">How it works?</p>
      <div className="flex-col sm:flex-row gap-[40px] flex sm:justify-between">
        <div className="flex flex-col justify-start items-center">
          <div className="w-[90px] h-[90px] p-[33px] rounded-[20px] bg-[#9672FF] mb-[30px] sm:mb-[50px]">
            <img
              src="./images/search.svg"
              alt=""
              className="w-[25px] h-[25px]"
            />
          </div>
          <p className="mb-[15px] font-semibold text-[22px]">
            Research Suburbs
          </p>
          <p className="text-[#333333] text-[16px] max-w-[85%] sm:max-w-[260px] text-center">
          Wonder twenty hunted and put income set desire expect. Am cottage calling.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center">
          <div className="w-[90px] h-[90px] p-[33px] rounded-[20px] bg-[#4DDFFD] mb-[50px]">
            <img
              src="./images/hand.svg"
              alt=""
              className="w-[25px] h-[25px]"
            />
          </div>
          <p className="mb-[15px] font-semibold text-[22px]">
          Instant Valuation
          </p>
          <p className="text-[#333333] text-[16px] max-w-[260px] text-center">
          Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center">
          <div className="w-[90px] h-[90px] p-[33px] rounded-[20px] bg-[#F2B8EC] mb-[50px]">
            <img
              src="./images/house.svg"
              alt=""
              className="w-[25px] h-[25px]"
            />
          </div>
          <p className="mb-[15px] font-semibold text-[22px]">
          Track Property
          </p>
          <p className="text-[#333333] text-[16px] max-w-[260px] text-center">
          Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
