import React from "react"

export default function MediaPartner() {
  return (
    <section className="border-y-2 border-black">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7 bg-gooRed-300 border-b-2 md:border-0 border-black">
          <div className="w-full h-full bg-media-lines bg-cover bg-repeat-y bg-top py-[30px] lg:py-[60px] px-[30px] lg:px-[60px]">
            <div className="text-center md:text-left">
              <h1 className="font-gooBold text-black text-[50px] md:text-[65px] tracking-[-.10rem] md:tracking-[-.20rem]">Media Partner</h1>
              <h2 className="font-gooReg text-black text-[14px] tracking-[-.001rem] sm:text-[16px]">Google HackFest 2023 Indonesia Official Media Partner</h2>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-[30px]">
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <img src="/libraries/images/media-partner/1.png" className="w-full h-auto" alt=""/>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <img src="/libraries/images/media-partner/2.png" className="w-full h-auto" alt=""/>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <img src="/libraries/images/media-partner/3.png" className="w-full h-auto" alt=""/>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <img src="/libraries/images/media-partner/4.png" className="w-full h-auto" alt=""/>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <img src="/libraries/images/media-partner/5.png" className="w-full h-auto" alt=""/>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <img src="/libraries/images/media-partner/6.png" className="w-full h-auto" alt=""/>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center">
                <img src="/libraries/images/media-partner/7.png" className="w-full h-auto" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 py-[60px] px-[50px] bg-gooYellow-900 border-b-2 md:border-b-0 md:border-l-2 border-black h-full">
        <img src="/libraries/images/svg/illustrator/mediaPartner.svg" className="m-auto"/>
        </div>
      </div>
    </section>
  )
}
