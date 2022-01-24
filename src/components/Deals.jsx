import React from "react";

export default function Deals() {
  return (
    <div className="container py-[50px] sm:py-[123px] p-pad20 sm:p-x-[0px]">
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="max-w-full sm:max-w-[470px]">
          <p className="font-semibold text-[40px] mb-[15px]">
            Best Real Estate Deals
          </p>
          <p className="max-w-[470px] text-[16px] mb-[40px] sm:mb-[50px]">
            Colonel gravity get thought fat smiling add but. Wonder twenty
            hunted and put income set desire expect.
          </p>
        </div>
        <button className="w-[200px] py-[20px] px-[33px] font-medium text-white bg-[#F85A47] rounded-[5px] max-h-[65px]">
          View All Property
        </button>
      </div>
      <ul className="max-w-[865px] flex justify-between text-[19px] font-semibold mb-[45px]">
        <li className="hover:text-orange pb-[12px] hover:border-b-orange border-b-white">
          <a href="#" className="text-[19px] font-normal hidden sm:block ">Residential Property</a>
        </li>
        <li className="hover:text-orange pb-[12px] hover:border-b-orange border-b-white">
          <a href="#" className="text-[19px] font-normal hidden sm:block">Commercial Property</a>
        </li>
        <li className="hover:text-orange pb-[12px] hover:border-b-orange border-b-white">
          <a href="#" className="text-[19px] font-normal hidden sm:block">Agriculture Property</a>
        </li>
        <li className="hover:text-orange pb-[12px] hover:border-b-orange border-b-white">
          <a href="#" className="text-[19px] font-normal hidden sm:block">Industrial Property</a>
        </li>
      </ul>
      <div className="grid grid-cols-1 gap-y-[20px] sm:flex w-full justify-between sm:gap-x-[30px]">
        <div className="relative rounded-[5px]">
          <img src="./images/house-1.svg" alt="" className="w-full h-full"/>
          <div className="text-white  absolute top-[14px] left-[14px] flex gap-x-[6px] text-[12px]">
            <p className="border max-w-[75px] rounded-[5px] py-[5px] px-[12px] bg-[#000000] bg-opacity-[40%]">
              Featured
            </p>
            <p className="border max-w-[75px] rounded-[5px] py-[5px] px-[12px] bg-[#000000] bg-opacity-[40%]">
              3D
            </p>
          </div>
        </div>
        <div className="relative rounded-[5px]">
          <img src="./images/house-2.svg" alt="" className="w-full h-full" />
          <div className="text-white  absolute top-[14px] left-[14px] flex gap-x-[6px] text-[12px]">
            <p className="border max-w-[75px] rounded-[5px] py-[5px] px-[12px] bg-[#000000] bg-opacity-[40%]">
              Featured
            </p>
            <p className="border max-w-[75px] rounded-[5px] py-[5px] px-[12px] bg-[#000000] bg-opacity-[40%]">
              3D
            </p>
          </div>
        </div>
        <div className="relative rounded-[5px]">
          <img src="./images/house-3.svg" alt="" className="w-full h-full" />
          <div className="text-white  absolute top-[14px] left-[14px] flex gap-x-[6px] text-[12px]">
            <p className="border max-w-[75px] rounded-[5px] py-[5px] px-[12px] bg-[#000000] bg-opacity-[40%]">
              Featured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
