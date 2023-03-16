export default function Prize() {
  return (
    <section className="border-y-2 sm:border-y-2 border-black relative">
      <div className="absolute w-full grid md:grid-cols-2 grid-cols-1 h-full z-0">
        <div className="bg-gooYellow-900 border-2 sm:border-0 sm:border-r-2 border-black"/>
        <div className="bg-white" />
      </div>
      <div className="relative md:container mx-auto z-10">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="bg-gooYellow-900 h-full border-b-2 sm:border-b-0 sm:border-r-2 border-black flex justify-center items-center aspect-1">
            <img
              className="p-8"
              src="/libraries/images/svg/prizes.svg"
              alt="prizes & benefits"
            />
          </div>
          <div className="bg-white flex flex-col justify-center px-16 py-16">
            <h2 className="text-title font-gooMed">Prizes & Benefits</h2>
            <p className="font-gooReg text-base 2xl:text-lg mb-2 mt-4">
              The benefits you will get if you win
            </p>
            <ul className="font-gooMed text-base 2xl:text-lg list-disc list-inside">
              <li className="mb-2">
                <span>Mentorships from experts</span>
              </li>
              <li className="mb-2">
                <span>Gift Set and fresh money</span>
              </li>
              <li className="mb-2">
                <span>Feedback and inputs from professional judges</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
