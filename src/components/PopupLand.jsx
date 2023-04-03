import { useState, useRef, useEffect } from "react"

export default function PopupLand() {

    const [showPop, setPop] = useState(true);
    let popRef = useRef();

    // Close Pop Up outside
    useEffect(() => {
        let handler = (e) => {
          if (!popRef.current.contains(e.target)) {
            setPop(false);
          }
        };
        document.addEventListener("mousedown", handler);
    
        return () => {
          document.removeEventListener("mousedown", handler);
        };
      });

  return (
    <div className={`${ showPop === true ? "" : "hidden" } w-full h-screen backdrop-blur-sm fixed left-0 top-0 z-[9000] transition-all duration-200 ease-in-out`}>
        <div className="relative w-full h-full">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-fit h-fit p-8 bg-white border-2 border-black relative" ref={popRef}>
                    <button className="bg-black p-2 rounded-full absolute right-[-5%] top-[-10%] hover:bg-gooYellow-700 transition-all duration-200 ease-in-out border border-black" onClick={() => setPop(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="min-w-[220px] max-w-[400px] h-fit">
                        <h1 className="text-gooYellow-700 text-center font-gooMed text-[16px] md:text-[20px] lg:text-[23px] mb-2">Thank you for participating in</h1>
                        <img src="/libraries/images/svg/hackfest-logo.svg"/>
                        <h1 className="text-gooGreen-700 text-center font-gooMed text-[17px] md:text-[21px] lg:text-[23px] mt-6">See you at HackFest 2024!</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
