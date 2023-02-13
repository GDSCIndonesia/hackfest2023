export default function Prize() {
  return (
    <section className="border-y-2 border-black relative">
      <div className="absolute w-full grid grid-cols-2 h-full z-0">
        <div className="bg-gooYellow-900 border-r-2 border-black" />
        <div className="bg-white" />
      </div>
      <div className="relative container mx-auto z-10">
        <div className="grid grid-cols-2">
          <div className="bg-gooYellow-900 h-full border-r-2 border-black flex justify-center items-center aspect-1">
            <div className="relative font-gooBold text-4xl text-center">
              <p className="-translate-x-44 -translate-y-8">Custom Backpack</p>
              <span className="absolute rotate -translate-y-12 -translate-x-2 z-10">
                <svg
                  width="53"
                  height="99"
                  viewBox="0 0 53 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.5614 98.3451C38.752 98.8634 39.3267 99.1292 39.8451 98.9386L48.2923 95.833C48.8106 95.6424 49.0764 95.0677 48.8858 94.5493C48.6952 94.031 48.1205 93.7653 47.6021 93.9558L40.0935 96.7164L37.333 89.2077C37.1424 88.6894 36.5677 88.4236 36.0493 88.6142C35.531 88.8048 35.2653 89.3795 35.4558 89.8979L38.5614 98.3451ZM0.457356 2.49909C13.9572 3.0753 31.9541 8.53637 42.3402 22.8741C52.6753 37.1416 55.714 60.5498 38.5923 97.5803L40.4077 98.4197C57.686 61.0502 54.8914 36.7917 43.9599 21.7009C33.0792 6.6803 14.3762 1.09136 0.542644 0.50091L0.457356 2.49909Z"
                    fill="black"
                  />
                </svg>
              </span>
              <img
                className="scale-110"
                src="/libraries/images/prizes.png"
                alt=""
              />
              <span className="absolute rotate-[215deg] -translate-y-9 translate-x-4 z-10">
                <svg
                  width="53"
                  height="99"
                  viewBox="0 0 53 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.5614 98.3451C38.752 98.8634 39.3267 99.1292 39.8451 98.9386L48.2923 95.833C48.8106 95.6424 49.0764 95.0677 48.8858 94.5493C48.6952 94.031 48.1205 93.7653 47.6021 93.9558L40.0935 96.7164L37.333 89.2077C37.1424 88.6894 36.5677 88.4236 36.0493 88.6142C35.531 88.8048 35.2653 89.3795 35.4558 89.8979L38.5614 98.3451ZM0.457356 2.49909C13.9572 3.0753 31.9541 8.53637 42.3402 22.8741C52.6753 37.1416 55.714 60.5498 38.5923 97.5803L40.4077 98.4197C57.686 61.0502 54.8914 36.7917 43.9599 21.7009C33.0792 6.6803 14.3762 1.09136 0.542644 0.50091L0.457356 2.49909Z"
                    fill="black"
                  />
                </svg>
              </span>
              <p className="translate-x-48 translate-y-12">Google Nest Mini</p>
            </div>
          </div>
          <div className="bg-white flex flex-col justify-center px-16 ">
            <h2 className="text-title font-gooMed">Prizes & Benefits</h2>
            <p className="font-gooReg text-base 2xl:text-lg mb-2">
              The benefits you will get if you win
            </p>
            <ul className="font-gooMed text-base 2xl:text-lg">
              <li className="mb-2">
                <span className="mr-2 font-gooBold">+</span>Mentorships from
                experts
              </li>
              <li className="mb-2">
                <span className="mr-2 font-gooBold">+</span>GiftSet, google
                nest, and cash prize
              </li>
              <li className="mb-2">
                <span className="mr-2 font-gooBold">+</span>Feedback and inputs
                from professional judges
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
