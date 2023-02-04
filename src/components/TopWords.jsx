import React from 'react'

export default function TopWords() {
  return (
    <section className='bg-topWords-lines bg-cover bg-no-repeat bg-top w-full h-full flex justify-center py-[100px]'>
        <div className='w-[85%] sm:w-[74%] md:w-[68%] lg:w-[62%] max-w-[838px] text-center'>
            <h1 className='font-gooReg text-[26px] sm:text-[30px] md:text-[35px] tracking-[-.025rem] sm:leading-[35px] md:leading-[45px]'>You know all those great ideas you have? We want you to try them, lots of them, and find out what works.</h1>
            <p className='font-gooReg text-[14px] md:text-[16px] tracking-[-.025rem] w-[90%] mx-auto mt-[15px]'>Register your team now and have the chance of winning one of the most prestigious hackathon events in Indonesia!</p>
        </div>
    </section>
  )
}
