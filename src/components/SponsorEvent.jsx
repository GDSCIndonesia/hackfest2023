import React from "react"

export default function SponsorEvent() {
  return (
    <section className="bg-topWords-lines bg-cover bg-no-repeat bg-top w-full h-full flex justify-center py-[100px]">
      <div className="w-[85%] sm:w-[74%] md:w-[68%] lg:w-full max-w-[900px] text-center">
        <h1 className="font-gooReg text-[26px] sm:text-[30px] md:text-[35px] tracking-[-.025rem] sm:leading-[35px] md:leading-[45px]">
          Sponsors
        </h1>
        <p className="font-gooReg tracking-wide text-[14px] md:text-[16px] md:w-[90%] mx-auto mt-[15px]">
        We proudly present our official sponsors for Google Hackfest 2023 
        </p>
        <div className="grid grid-cols-2 gap-x-5 sm:gap-x-8 md:gap-x-14 mt-[30px]">
        <div className="col-span-1 flex justify-center items-center">
          <a href="https://idcloudhost.com?utm_source=gdsc-hackfest&utm_medium=website&utm_campaign=gdsc-hackfest&utm_term=hackfest">
            <img src="/libraries/images/sponsors/idCloudHost.svg" className="w-full h-auto" alt=""/>
          </a>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <a href="https://developers.google.com/?utm_source=gdsc-hackfest&utm_medium=website&utm_campaign=gdsc-hackfest&utm_term=hackfest ">
            <img src="/libraries/images/sponsors/googleDevelopers.svg" className="w-full h-auto" alt=""/>
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}
