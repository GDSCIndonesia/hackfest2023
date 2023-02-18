import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  // Navbar Hooks
  const [showNavbar, setNavbar] = useState(false);

  // Close navbar outside
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNavbar(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <section className="bg-white sticky top-0 left-0 z-[8999] w-full overflow-x-clip" ref={menuRef}>
      <div className="flex border-y-[2px] border-black justify-between lg:justify-start items-center">
        <div className="pl-[30px] md:pl-[60px] pr-[20px]">
          <a href="#">
            <img src="/libraries/images/svg/gdsc-logo.svg" className="h-[28px]" />
          </a>
        </div>
        <div className="pr-[30px] md:pr-[60px] lg:hidden">
          <button onClick={() => setNavbar(true)} className="py-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-9 h-9 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            showNavbar ? "right-0" : "right-[-100%]"
          } absolute lg:static top-0 h-screen lg:h-fit bg-white lg:bg-transparent lg:w-full border-l-2 border-black lg:border-l-0 transition-all duration-500 ease-in-out z-[8999]`}
        >
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <ul className="flex w-full lg:w-fit text-center lg:text-left space-x-0 lg:space-x-[50px] flex-col lg:flex-row">
              <li className="border-y-2 border-black lg:border-0 py-[20px] lg:py-0 px-[15px] lg:p-0">
                <div className="flex space-x-8 lg:hidden">
                  <img
                    className="w-[140px] h-auto"
                    src="/libraries/images/svg/hackfest-logo.svg"
                  />
                  <button
                    onClick={() => setNavbar(false)}
                    className="font-gooReg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li className="border-b border-black lg:border-0">
                <a
                  href="#about"
                  className="font-gooReg py-[15px] lg:py-0 inline-block w-full hover:bg-gooYellow-500 lg:hover:bg-transparent lg:hover:underline transition-all"
                >
                  About
                </a>
              </li>
              <li className="border-b border-black lg:border-0">
                <a
                  href="#events"
                  className="font-gooReg py-[15px] lg:py-0 inline-block w-full hover:bg-gooYellow-500 lg:hover:bg-transparent lg:hover:underline transition-all"
                >
                  Events
                </a>
              </li>
              <li className="border-b border-black lg:border-0">
                <a
                  href="#timeline"
                  className="font-gooReg py-[15px] lg:py-0 inline-block w-full hover:bg-gooYellow-500 lg:hover:bg-transparent lg:hover:underline transition-all"
                >
                  Timeline
                </a>
              </li>
              <li className="border-b border-black lg:border-0">
                <a
                  href="#"
                  className="font-gooReg py-[15px] lg:py-0 inline-block w-full hover:bg-gooYellow-500 lg:hover:bg-transparent lg:hover:underline transition-all"
                >
                  Prizes
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-gooReg py-[15px] lg:py-0 inline-block w-full hover:bg-gooYellow-500 lg:hover:bg-transparent lg:hover:underline transition-all"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row w-full lg:w-fit ">
              <li>
                <a
                  href="https://goo.gle/googledevsid"
                  className="inline-block text-black font-gooReg py-[15px] px-[40px] hover:bg-gooYellow-800 hover:text-black transition-all border-y lg:border-y-0 lg:border-x-2 border-black w-full lg:w-fit text-center"
                >
                  Join Discord
                </a>
              </li>
              <li>
                <a
                  href="https://links.gdsc-hackfest.com/proposal-submission"
                  className="inline-block bg-black text-white font-gooReg py-[15px] px-[40px] hover:bg-gooYellow-800 hover:text-black transition-all w-full lg:w-fit text-center border-b border-black lg:border-b-0"
                >
                  Submit Proposal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
