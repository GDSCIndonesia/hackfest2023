import React from "react"

export default function OrganizerEvent() {
  return (
    <section className="bg-topWords-lines bg-cover bg-no-repeat bg-top w-full h-full flex justify-center py-[100px]">
      <div className="w-[85%] sm:w-[74%] md:w-[68%] lg:w-[62%] max-w-[838px] text-center">
        <h1 className="font-gooReg text-[26px] sm:text-[30px] md:text-[35px] tracking-[-.025rem] sm:leading-[35px] md:leading-[45px]">
          Organizer
        </h1>
        <p className="font-gooReg tracking-wide text-[14px] md:text-[16px] w-[90%] mx-auto mt-[15px]">
          We proudly present our super team for HackFest Indonesia 2023
        </p>
        <img src="/libraries/images/svg/gdsc-indo.svg" className="mt-[40px] mx-auto" alt="" srcset=""/>
      </div>
    </section>
  )
}
