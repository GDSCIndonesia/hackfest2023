import React from "react";

export default function HackfestDetail() {
  return (
    <section className="HackfestDetail border-b-2 border-black" id="about">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 py-[14%] 2xl:py-[8%] px-[6%] md:px-[10%] flex items-start justify-center 2xl:justify-center flex-col bg-gooBlue-900 border-b-2 md:border-b-0 md:border-r-2 border-black">
          <div className="font-gooBold tracking-[-1%] text-white text-[38px] md:text-[35px] lg:text-[55px] leading-tight text-left">
            <h1>What is</h1>
            <h1>Hackfest?</h1>
          </div>
          <div className="font-gooReg tracking-wide text-white text-justify mt-[30px] md:text-[12px] lg:text-[18px]">
            <p>
              HackFest Indonesia is Indonesia’s hackathonheld by GDSC Indonesia
              where university students of different skills from all over
              Indonesia can cometogether to experiment and develop impactful
              software or hardware based on United Nation 17 SDGs.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 py-[14%] 2xl:py-[8%] px-[6%] md:px-[10%] flex items-center justify-center flex-col bg-gooRed-900">
          <img src="/libraries/images/svg/hackfest-illus.svg" />
        </div>
      </div>
    </section>
  );
}
