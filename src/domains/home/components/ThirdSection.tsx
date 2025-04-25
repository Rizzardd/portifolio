import { Building2 } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiTypescript } from "react-icons/si";

export default function ThirdSection() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Section Header */}
      <div className="rounded-full bg-ring w-36 h-10 flex items-center justify-center gap-3">
        <PiStarFourFill className="text-burguer" />
        <p className="text-white font-font-family font-semibold text-lg">
          Life Time
        </p>
      </div>

      <div className="pt-8 text-center flex flex-col pb-8">
        <h1 className="font-font-family font-semibold text-2xl">
          Education & Experience
        </h1>
        <p className="pt-2 font-font-family">something</p>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-6xl px-5 lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Vertical Line in the Middle */}
        <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-gray-300"></div>

        {/* Item 1 (Left Side on Large Screens) */}
        <div className="relative pl-6 border-l-2 border-dotted border-gray-300 pb-6 lg:border-0 lg:pr-6 lg:pl-0 lg:text-right">
          <span className="absolute mt-18 left-[-6px] top-1 w-3 h-3 bg-burguer rounded-full lg:left-auto lg:right-[-6px]"></span>
          <div className="flex items-center gap-2 lg:justify-end">
            <FaGraduationCap className="text-ring text-xl" />
            <span className="text-text font-bold">2022 - 2025</span>
          </div>
          <h2 className="font-bold text-lg mt-2">
            Analysis and Systems Development
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Faculdade de Tecnologia Senai Mato Grosso (Fatec Senai MT) is a
            private higher education institution, accredited by the Ministry of
            Education (Ordinances No. 1,249/2011 and No. 1,359/2017).
          </p>
          <p className="text-white font-bold mt-5">
            FATEC Senai, Cuiabá, MT, Brazil
          </p>
        </div>

        {/* Item 2 (Right Side on Large Screens) */}
        <div className="relative pt-5 pl-6 border-l-2 border-dotted border-gray-300  lg:border-0 lg:pl-6">
          <span className="absolute mt-[90px] left-[-6px] top-1 w-3 h-3 bg-burguer rounded-full lg:left-auto lg:right-[-6px]"></span>
          <div className="flex items-center gap-2">
            <Building2 className="text-ring text-xl" />

            <span className="text-text font-bold">2022 - 2025</span>
          </div>
          <h2 className="font-bold text-lg mt-2">Cosmopix Games Limitada.</h2>
          <p className="text-gray-500 text-sm mt-2">
            Cosmopix is an Indie Dev team building the new and epic pixelated
            universe of Galaxymus. Explore it by playing modern and fun games
            made in the classical golden style of pixel art.
          </p>
          <p className="text-white font-bold mt-5">
            Cosmopix, Curitiba, PR, Brazil
          </p>
          <span className="flex flex-row gap-5 mt-3"><IoLogoReact className="text-react w-8 h-8" /> <RiNextjsFill className="text-white w-8 h-8" /> <RiTailwindCssFill className="text-tailwind w-8 h-8" /> <SiAxios className="text-axios w-8 h-8" />
          <SiTypescript className="text-typescript w-8 h-8 bg-white rounded" /> 
          </span>
        </div>
      </div>
    </div>
  );
}
