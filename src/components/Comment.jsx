import React from "react";

export default function Comment() {
  return (
    <div className="sm:max-w-[1200px] mx-auto mb-[50px] sm:mb-[210px] p-pad20 sm:p-[0px]">
      <p className="sm:max-w-[570px] text-[30px] sm:text-[40px] font-semibold mb-[51px]">
        Loved by businesses, and individuals across the globe.
      </p>
      <div className="grid grid-cols-1 gap-y-[30px] sm:flex sm:justify-between sm:mb-[85px]">
        <div className="w-full sm:w-[380px] py-[52px] sm:px-[30px] px-[20px] rounded-[10px] border border-[#EBEBEB] h-[367px] ">
          <div className="flex gap-x-[2px] text-[#FBB040] mb-[34px]">
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
          </div>
          <p className="text-[16px] text-[#333333] max-w-[270px] mb-[53px] font-normal leading-[28px]">
            Moderate children at of outweigh it. Unsatiable it considered
            invitation he travelling insensible. Consulted admitting oh mr up as
            described.
          </p>
          <div className="flex gap-x-[20px] items-center">
            <div className="w-[48px] h-[48px] rounded-full">
              <img src="./images/avatar1.svg" alt="" />
            </div>
            <div className="">
              <p className="text-[16px] font-bold">Jane Cooper</p>
              <p className="text-[14px] font-light">Los Angeles, CA</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[380px] py-[52px] sm:px-[30px] px-[20px] rounded-[10px] border border-[#EBEBEB] h-[367px] ">
          <div className="flex gap-x-[2px] text-[#FBB040] mb-[34px]">
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
          </div>
          <p className="text-[16px] text-[#333333] max-w-[270px] mb-[53px] font-normal leading-[28px]">
            The and collecting motionless difficulty son. His hearing staying
            ten colonel met. Sex drew six easy four dear cold
          </p>
          <div className="flex gap-x-[20px] items-center">
            <div className="w-[48px] h-[48px] rounded-full">
              <img src="./images/avatar2.svg" alt="" />
            </div>
            <div className="">
              <p className="text-[16px] font-bold">Robert Fox</p>
              <p className="text-[14px] font-light">New York City, NY</p>
            </div>
          </div>
        </div> 
        <div className="w-full sm:w-[380px] py-[52px] sm:px-[30px] px-[20px] rounded-[10px] border border-[#EBEBEB] h-[367px] ">
          <div className="flex gap-x-[2px] text-[#FBB040] mb-[34px]">
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
            <ion-icon name="star" className="w-[20px] h-[20px]"></ion-icon>
          </div>
          <p className="text-[16px] text-[#333333] max-w-[270px] mb-[53px] font-normal leading-[28px]">
            Moderate children at of outweigh it. Unsatiable it considered
            invitation he travelling insensible. Consulted admitting oh mr up as
            described.
          </p>
          <div className="flex gap-x-[20px] items-center">
            <div className="w-[48px] h-[48px] rounded-full">
              <img src="./images/avatar3.svg" alt="" />
            </div>
            <div className="">
              <p className="text-[16px] font-bold">Leslie Alexander</p>
              <p className="text-[14px] font-light">Buffalo, NJ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1090px] flex mr-[108px] sm:inline-block">
        <ul className="flex items-center gap-x-[80px] px-[30px] text-[#666666]">
          <li className="">
            <a href="#">
              <img src="./images/airbnb.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/cisco.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/ebay.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/uber.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/ms.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
        <p className="max-w-[311px] text-[16px] font-normal leading-[24px] mt-[25px] sm:inline-block">
        Give us a Call 1-888-111-2222 and we can set you up, or <span className="underline text-[#2CBDE7]">check our pricing plans</span>
        </p>
    </div>
  );
}
