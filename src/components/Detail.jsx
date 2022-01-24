import React from "react";

export default function Detail() {
  return (
    <div className="pt-[50px] sm:pt-[120px] container sm:mb-[196px] mb-[50px] p-pad20 sm:p-x-[0px]">
      <p className="font-semibold text-[25px] max-w-full sm:text-[40px] text-center mb-[60px] sm:mb-[95px]">
        Featured Listing of the Week
      </p>
      <div className="p-[20px] sm:p-[39px] bg-[#F1FFFF] sm:h-[650px] flex justify-center">
        <div className="sm:w-[530px] relative h-full hidden sm:block">
          <img src="./images/buiding.svg" alt="" className="" />
          <img
            src="./images/room.svg"
            alt=""
            className="absolute position-detail bottom-[52px] -translate-x-1/2"
          />
        </div>
        <div className="sm:flex-1 sm:p-[39px] max-w-full">
          <p className="sm:max-w-[378px] font-semibold text-[23px] sm:text-[31px] mb-[28px]">
            The and collecting for the motionless difficulty son.
          </p>
          <p className="text-[16px] font-normal text-[#545A58] mb-[42px]">
            Conveying or northward offending admitting perfectly my. Colonel
            gravity get thought fat smiling add but difficult situations.
          </p>
          <div className="sm:w-[396px] grid sm:grid-cols-3 grid-cols-2 sm:gap-y-[37px] gap-y-[25px] gap-x-[70px] mb-[54px]">
            <div className="">
              <p className="font-bold text-[17px] mb-[12px]">Budget</p>
              <p className="text-[17px] font-normal text-[#545A58]">
                Confidential
              </p>
            </div>
            <div className="">
              <p className="font-bold text-[17px] mb-[12px]">Size</p>
              <p className="text-[17px] font-normal text-[#545A58]">1200 m2</p>
            </div>
            <div className="">
              <p className="font-bold text-[17px] mb-[12px]">Type</p>
              <p className="text-[17px] font-normal text-[#545A58]">Office</p>
            </div>
            <div className="">
              <p className="font-bold text-[17px] mb-[12px]">Status</p>
              <p className="text-[17px] font-normal text-[#545A58]">Done</p>
            </div>
            <div className="">
              <p className="font-bold text-[17px] mb-[12px]">Location</p>
              <p className="text-[17px] font-normal text-[#545A58]">
                Switzerland
              </p>
            </div>
            <div className="">
              <p className="font-bold text-[17px] mb-[12px]">Flat</p>
              <p className="text-[17px] font-normal text-[#545A58]">8 Room</p>
            </div>
          </div>
          <button className="sm:w-[412px] w-full h-[53px] rounded-[5px] bg-orange text-center py-[16px] text-white text-[16px] sm:text-[18px] font-medium leading-none">
            YES! I WANT BOOK “OFFICE PACKAGE”
          </button>
        </div>
      </div>
    </div>
  );
}
