import React from "react";

export default function Header() {
  return (
    <div className="max-w-full relative mb-[70px] sm:mb-[224px] bg-[#e0f8ff] sm:bg-white">
      <div className="w-[511px] h-full bg-[#BDCCFF] absolute z-1 top-[0] right-[0] hidden sm:block"></div>
      <div className="container z-3 w-full relative z-2">
        <img
          src="./images/building.png"
          alt=""
          className="w-[603px] h-[573px] absolute z-2 top-[184px] right-[0px] object-cover hidden sm:block"
        />
        <div className="relative z-3">
          <div className="md:mb-[157px] w-full py-[34px] bg-orange h-[80px] px-[20px] items-center fixed top-[0px] left-[0px] z-[90] sm:p-[0px] sm:pt-[34px] sm:bg-opacity-0 flex sm:justify-between sm:relative xl:px-[0px] sm:px-[20px] justify-between">
            <a href="#" className="text-white sm:text-dark text-[23px] font-extrabold">
              SmartPage
            </a>
            <label htmlFor="menu-check" className="sm:hidden text-[50px] h-full flex items-center">
            <ion-icon name="menu" className=""></ion-icon>
            </label>
            <input type="checkbox" id="menu-check" hidden/>   
            <label htmlFor="menu-check" className="menu-layer absolute left-[0] top-[0] sm:hidden w-full h-[1000vh] bg-[#000000be] z-[50] hidden"></label>
            <ul className="menu-header sm:flex sm:translate-x-[0%] sm:flex-row sm:items-center sm:gap-x-[46px] flex flex-col gap-y-[20px] absolute sm:relative z-[60] top-[0px] left-[0px] h-[1000vh] bg-[#0e0033] sm:bg-[#fff0] sm:bg-none w-[85%] sm:w-fit p-[20px] text-white sm:text-[#000000] sm:h-full">
              <li className="text-[20px] sm:text-[13px] font-bold ">
              <label htmlFor="menu-check" className="text-[30px] sm:hidden font-bold block text-right">
              <ion-icon name="close"></ion-icon>
              </label>
                <a href="#">Home</a>
              </li>
              <li className="text-[20px] sm:text-[13px] font-bold">
                <a href="#">About</a>
              </li>
              <li className="text-[20px] sm:text-[13px] font-bold">
                <a href="#">Service</a>
              </li>
              <li className="text-[20px] sm:text-[13px] font-bold">
                <a href="#">Portfolio</a>
              </li>
              <li className="text-[20px] sm:text-[13px] font-bold">
                <a href="#">Blog</a>
              </li>
              <li className="text-[20px] sm:text-[13px] font-bold">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mt-[80px] px-[20px] pt-[30px] sm:pt-[50px] xl:px-[0px]">
            <p className="text-[#FF9900] text-[22px] font-bold uppercase mb-[24px] ">
              RESIDENTIAL & OFFICE SPACES
            </p>
            <p className="font-extrabold text-[40px] sm:text-[54px] mb-[23px] max-w-[484px] sm:font-[46px]">
              Smart Living Style for Smart People
            </p>
            <p className="text-dark text-[17px] max-w-[499px] mb-[48px]">
              Much did had call new drew that kept. Limits expect wonder law
              she. Now has you views woman noisy match money rooms.
            </p>
          </div>
          <div className="flex items-center w-full sm:max-w-[756px] h-[50px] sm:h-[86px] mb-[50px] sm:mb-[145px] px-[20px] xl:px-[0px]">
            <div className=" p-[10px] sm:p-[30px] flex gap-x-[10px] sm:gap-x-[20px] w-[60%] border border-[#DADADA] h-full items-center bg-white lg:w-[568px] ">
              <img
                src="./images/icon-home.svg"
                alt=""
                className="w-[21px] h-[21px]"
              />
              <input
                type="text"
                className="text-dark w-full"
                placeholder="Enter Zipcode to search properties"
              />
            </div>
            <div className="bg-orange flex-1 flex items-center justify-center sm:py-[32px] sm:p-[32px] text-white text-center h-full">
              Search Now!
            </div>
          </div>
          <div className="p-pad20 sm:p-x-[0px] ">
              <p className="text-[17px] mb-[20px] sm:mb-[27px] text-dark">Our Amazing Partners</p>
              <div className="sm:flex sm:gap-x-[50px] items-center grid grid-cols-2 gap-[20px]">
                    <a href="" > <img src="./images/buzz.svg" alt="" className="text-[#718087]"/></a>
                    <a href="" > <img src="./images/chase.svg" alt="" className="text-[#718087]"/></a>
                    <a href="" > <img src="./images/ms.svg" alt="" className="text-[#718087]"/></a>
                    <a href="" > <img src="./images/gucc.svg" alt="" className="text-[#718087]"/></a>
                    <a href="" > <img src="./images/airbnb.svg" alt="" className="text-[#718087]"/></a>
                    <a href="" > <img src="./images/uber.svg" alt="" className="text-[#718087]"/></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
