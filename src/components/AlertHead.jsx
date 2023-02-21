import { useState } from "react"

export default function AlertHead() {

  const [showAlert, setAlert] = useState(true)

  return (
    <section className={`${showAlert === true ? "" : "hidden"} bg-black p-8`}>
        <div className="flex justify-between items-start space-x-3 sm:space-x-4">
            <h1 className='text-white font-gooReg text-[13px] md:text-[15px]'>The submission will be closed on Tuesday, 22nd February 2023 at 23.59 pm GMT+7 (23.59 WIB)</h1>
            <button onClick={() => setAlert(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
    </section>
  )
}
