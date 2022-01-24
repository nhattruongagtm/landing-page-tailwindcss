import React from "react";

export default function Footer() {
  return (
    <div className="pt-[50px] sm:pt-[162px] w-full sm:max-w-[899px] text-center mx-auto pb-[36px] bg-[#83d4ff66] sm:bg-white px-[20px] sm:px-[0px]">
      <p className="text-[30px] sm:text-[45px] font-bold mb-[11px]">Get Our Newsletter</p>
      <p className="mb-[34px] font-bold text-[23px]">
        To join the worldwide community
      </p>
      <div className="p-0 sm:py-[26px] sm:px-[30px] flex justify-center sm:justify-between mb-[50px] sm:mb-[160px] h-full">
        <div className="text-dark ">
          <input
            className="text-[17px] font-medium mb-[3px] sm:mb-[11px] w-full p-[5px] sm:p-[0px]"
            placeholder="Type your Email Address"
          />
          <p
            className="text-[16px] sm:text-[20px] font-bold"
            placeholder="Type your Email Address"
          >
            shakir260@gmail.com
          </p>
        </div>
        <div className="flex items-center justify-center py-[10px] sm:py-[23px] sm:px-[40px] px-[10px] bg-orange max-h-[72px] text-white">
          Search Now
        </div>
        
      </div>
      <div className="border-t border-dark sm:border-[#DEDFE1] pt-[0px] sm:pt-[60px] pb-[30px] sm:pb-[69px]">
        <div className="sm:flex justify-between w-full pt-[34px] hidden">
          <a href="#" className="text-dark text-[23px] font-extrabold">
            SmartPage
          </a>
          <ul className="flex items-center gap-x-[46px]">
            <li className="text-[13px] font-bold">
              <a href="#">Home</a>
            </li>
            <li className="text-[13px] font-bold">
              <a href="#">About</a>
            </li>
            <li className="text-[13px] font-bold">
              <a href="#">Service</a>
            </li>
            <li className="text-[13px] font-bold">
              <a href="#">Portfolio</a>
            </li>
            <li className="text-[13px] font-bold">
              <a href="#">Blog</a>
            </li>
            <li className="text-[13px] font-bold">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-[12px] font-bold text-dark">
        Copyright © 2021 AR Shakir . All Rights Reseved.
      </p>
    </div>
  );
}
