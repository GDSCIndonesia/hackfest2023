import React from "react"
import Countdown from "react-countdown"

export default function CountEvent() {

  // Render Countdown
  const renderer = ({ days, hours, minutes, seconds }) => {
    return <div className="flex justify-center md:justify-start">
    <div className="flex bg-white">
      <div className="text-center border-2 border-black w-[90px] sm:w-[100px] lg:w-[130px] xl:w-[150px]">
        <div className="font-gooMed text-[45px] sm:text-[50px] md:text-[60px] lg:text-[80px]">{days}</div>
        <div className="border-t-2 border-black font-gooReg text-[14px] sm:text-[16px] md:text-[18px] py-[5px]">Days</div>
      </div>
      <div className="text-center border-2 border-l-0 border-black w-[90px] sm:w-[100px] lg:w-[130px] xl:w-[150px]">
        <div className="font-gooMed text-[45px] sm:text-[50px] md:text-[60px] lg:text-[80px]">{hours}</div>
        <div className="border-t-2 border-black font-gooReg text-[14px] sm:text-[16px] md:text-[18px] py-[5px]">Hours</div>
      </div>
    </div>
    <div className="flex bg-white">
      <div className="text-center border-2 border-l-0 border-black w-[90px] sm:w-[100px] lg:w-[130px] xl:w-[150px]">
        <div className="font-gooMed text-[45px] sm:text-[50px] md:text-[60px] lg:text-[80px]">{minutes}</div>
        <div className="border-t-2 border-black font-gooReg text-[14px] sm:text-[16px] md:text-[18px] py-[5px]">Minutes</div>
      </div>
      <div className="text-center border-2 border-l-0 border-black w-[90px] sm:w-[100px] lg:w-[130px] xl:w-[150px]">
        <div className="font-gooMed text-[45px] sm:text-[50px] md:text-[60px] lg:text-[80px]">{seconds}</div>
        <div className="border-t-2 border-black font-gooReg text-[14px] sm:text-[16px] md:text-[18px] py-[5px]">Seconds</div>
      </div>
    </div>
  </div>;
  };

  return (
    <section className="border-y-2 border-black">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-5 py-[60px] px-[50px] bg-gooGreen-900 border-b-2 md:border-b-0 md:border-r-2 border-black h-full flex">
        <img src="/libraries/images/svg/illustrator/countdown.svg" className="m-auto"/>
        </div>
        <div className="col-span-12 md:col-span-7 bg-gooYellow-300 py-[30px] lg:py-[60px] px-[30px] lg:px-[60px]">
          <div className="text-center md:text-left">
            <h1 className="font-gooBold text-black text-[50px] md:text-[65px] tracking-[-.10rem] md:tracking-[-.20rem]">Events</h1>
            <h2 className="font-gooReg text-black text-[14px] tracking-[-.001rem] sm:text-[16px]">Register your team now and have the chance of winning one of the most prestigious hackathon events in Indonesia!</h2>
          </div>
          <div className="my-[30px]">
            <Countdown date={new Date("2023-03-24")} renderer={renderer}/>
          </div>
          <div className="flex space-x-[10px] sm:space-x-[20px] justify-center md:justify-start">
            <a href="" className="border-2 border-black px-[30px] py-[15px] font-gooReg text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] hover:bg-gooYellow-900 transition-all
            ">
              Download Guidebook
            </a>
            <a href="" className="border-2 border-black px-[30px] py-[15px] font-gooReg text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white bg-black hover:bg-gooGreen-900 transition-all
            ">
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}