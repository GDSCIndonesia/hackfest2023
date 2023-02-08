import React from "react";

export default function JoinDiscord() {
  return (
      <section className="bg-black py-[40px] md:py-0">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 p-[35px] xl:p-[50px]">
          <img src="/libraries/images/svg/illustrator/discord-01.svg" alt="" />
        </div>
        <div className="col-span-12 md:col-span-6 p-8 flex items-start md:items-center md:pr-[50px]">
          <div>
            <h1 className="text-white font-gooBold text-[35px] sm:text-[50px] md:text-[35px] lg:text-[50px] xl:text-[60px] leading-tight">
              Join Our
            </h1>
            <h1 className="text-white font-gooBold text-[35px] sm:text-[50px] md:text-[35px] lg:text-[50px] xl:text-[60px] leading-tight">
              Discord Channel
            </h1>
            <p className="text-white font-gooReg text-[13px] md:text-[12px] lg:text-[14px] mt-[10px]">
              Get all the information about HackFest 2023 through the official
              Google Developers Indonesia discord channel. Don't miss it, make
              sure you join by pressing the button below
            </p>
            <a
              href="https://goo.gle/googledevsid"
              className="inline-block bg-transparent text-white font-gooReg py-[10px] md:py-[15px] px-[30px] md:px-[40px] hover:bg-white hover:text-black transition-all w-full lg:w-fit text-center border-2 border-white mt-[30px] xl:mt-[40px] text-[16px] lg:text-[18px]"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
