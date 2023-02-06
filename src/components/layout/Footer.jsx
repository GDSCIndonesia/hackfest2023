import React from "react"

// Icons
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-[70px] flex flex-col justify-center">
        <div>
            <img src="/libraries/images/svg/gdsc-full-logo.svg" className="w-[300px] md:w-[400px] h-auto mx-auto"/>
        </div>
        <div className="flex space-x-[40px] text-[20px] mx-auto mt-[31px]">
            <a href="https://www.youtube.com/@gdscindonesia">
                <FaYoutube className="text-white"/>
            </a>
            <a href="https://twitter.com/gdscindonesia">
                <FaTwitter className="text-white"/>
            </a>
            <a href="https://instagram.com/gdscindonesia">
                <FaInstagram className="text-white"/>
            </a>
        </div>
        <div className="mt-[70px] text-white font-gooReg text-center text-[14px] sm:text-[16px]">
            <h1>Ⓒ 2023 All rights reserved GDSC Indonesia.</h1>
        </div>
    </footer>
  )
}
