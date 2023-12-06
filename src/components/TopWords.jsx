import React from "react";

export default function TopWords() {
  return (
    <section className="bg-topWords-lines bg-cover bg-no-repeat bg-top w-full h-full flex justify-center py-[100px]">
      <div className="w-[85%] sm:w-[74%] md:w-[68%] lg:w-[62%] max-w-[838px] text-center">
        {/* <h1 className="font-gooReg text-[26px] sm:text-[30px] md:text-[35px] tracking-[-.025rem] sm:leading-[35px] md:leading-[45px]">
        Turn your creative ideas into reality. Try them out and see what succeeds.
        </h1> */}
        <h1 className="font-gooReg text-[26px] sm:text-[30px] md:text-[35px] tracking-[-.025rem] sm:leading-[35px] md:leading-[45px]">
        Get Ready for HackFest 2024
        </h1>
        <p className="font-gooReg tracking-wide text-[14px] md:text-[16px] w-[90%] mx-auto mt-[15px]">
          Prepare your team now and have the chance of winning one of the most
          prestigious hackathon events in Indonesia!
        </p>
        <div className="mt-6">
        <a href="https://s.id/register-hackfest2024" className="inline-block text-black font-gooReg py-[15px] px-[40px] hover:bg-gooYellow-800 hover:text-black transition-all border-y border-x lg:border-y-2 lg:border-x-2 border-black w-full lg:w-fit text-center">
          Register HackFest 2024
        </a>
        </div>
      </div>
    </section>
  );
}