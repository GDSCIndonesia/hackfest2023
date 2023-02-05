import React from "react"

export default function MediaPartner() {
  return (
    <section className="border-y-2 border-black">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7 bg-gooRed-300 py-[30px] lg:py-[60px] px-[30px] lg:px-[60px] border-b-2 md:border-0 border-black">
          <div className="text-center md:text-left">
            <h1 className="font-gooBold text-black text-[50px] md:text-[65px] tracking-[-.10rem] md:tracking-[-.20rem]">Media Partner</h1>
            <h2 className="font-gooReg text-black text-[14px] tracking-[-.001rem] sm:text-[16px]">Register your team now and have the chance of winning one of the most prestigious hackathon events in Indonesia!</h2>
          </div>
          <div className="flex space-x-[10px] sm:space-x-[20px] justify-center md:justify-start my-[30px]">
            <h1 className="font-gooReg">To Be Announce</h1>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 py-[60px] px-[50px] bg-gooYellow-900 border-b-2 md:border-b-0 md:border-l-2 border-black h-full">
        <img src="/public/libraries/images/svg/illustrator/mediaPartner.svg" className="m-auto"/>
        </div>
      </div>
    </section>
  )
}
