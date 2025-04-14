"use client";

import { useTextCycle } from "@/hooks/useTextCycle";
import { FaGithub } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function FirstSection() {
  const text = useTextCycle(
    [
      "Developer",
      "Pixel Artist",
      "Game Dev Enthusiast",
      "UI/UX Designer Enthusiast",
    ],
    100, // Typing speed (milliseconds per character)
    2000 // Delay before deleting
  );

  return (
    <section className=" flex flex-col justify-items-start items-start h-[50vh] mt-40 ml-7">
      <div className="w-[80%] bg-header rounded-sm">
        <h5 className="text-text font-semibold py-2 text-center font-font-family">
          Hi there! I'm Monique Silva
        </h5>
      </div>
      <div className="mt-3">
        <h4 className="text-1xl font-normal text-ring font-font-family py-2">
          {"<"}
          {text}
          <span className="animate-blink ">|</span>
          {"/>"}
        </h4>
      </div>
      <div className="">
        <h5 className="text-white font-normal py-2  font-font-family">
          I'm Front-End Developer with three years of experience and a degree in
          Analysis and Systems Development. I'm seeking a full-time opportunity
          to apply my skills and grow professionally. Let’s connect!
        </h5>
      </div>
      <div className="flex flex-row mt-5">
        <button
          type="button"
          className="gap-2 text-white bg-ring hover:bg-[#2c2638]/90  font-semibold rounded-lg text-[15px] px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <IoLogoGithub className="w-8 h-8" />
          Github
        </button>
        <button
          type="button"
          className="gap-2 text-white bg-ring hover:bg-[#2c2638]/90  font-semibold rounded-lg text-[15px] px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          <IoDocumentTextOutline className="w-8 h-8" />
          
          Download Cv
        </button>
      </div>
      <div className="flex flex-col mt-4 gap-6">
       <div className="flex flex-col items-center text-center ml-3 ">
       <p className="text-ring text-xl font-bold font-font-family">4+</p>
       <p className="bg-header w-[120%] rounded-sm py-2 px-2 font-semibold font-font-family">projects done</p>
       </div>

       <div className="flex flex-col items-center text-center ml-3 ">
       <p className="text-ring text-xl font-bold font-font-family">3</p>
       <p className="bg-header w-[120%] rounded-sm py-2 px-2 font-semibold font-font-family">Years of Experience</p>
       </div>
      </div>
      
      
    </section>
  );
}
